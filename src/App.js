import { Client } from "boardgame.io/client";
import { BoardInfo } from "./BoardInfo";
import { Game } from "./Game";
import { moveJump, moveWalk } from "./Piece/MoveType";

class App {
    constructor(rootElement) {
        this.client = Client({ game: Game });
        this.client.start();
        this.rootElement = rootElement;

        this.createBoard();
        this.attachListeners();

        this.client.subscribe((state) => {
            this.state = state;
            this.update(state);
        });

        this.selected = null;
    }

    createBoard() {
        const size = 36;
        const rows = [];
        for (let i = 0; i < size; i++) {
            const cells = [];
            for (let j = 0; j < size; j++) {
                const id = size * i + j;
                cells.push(`<td class="cell" data-id="${id}"></td>`);
            }
            rows.push(`<tr>${cells.join("")}</tr>`);
        }

        this.rootElement.innerHTML = `
            <table>${rows.join("")}</table>
        `;
    }

    cleanTiles() {
        const cells = this.rootElement.querySelectorAll(".cell");
        cells.forEach((e) => {
            e.classList.remove("possible-move");
            e.classList.remove("possible-attack");
            e.classList.remove("selected");
        });
        this.selected = null;
    }

    attachListeners() {
        const cells = this.rootElement.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.onclick = () => {
                const id = parseInt(cell.dataset.id);
                const value = this.state.G.cells[id];
                if (cell.classList.contains("possible-move") || cell.classList.contains("possible-attack")) {
                    // We clicked on a highlighted tile showing an available move
                    this.client.moves.movePiece(this.selected, id);
                    this.cleanTiles();
                } else if (value !== null) {
                    // We clicked on a piece
                    this.cleanTiles();

                    const currPlayer = this.state.ctx.currentPlayer;
                    if (value[0] === currPlayer) {
                        // This piece belong to the current player
                        // Highlight the current piece
                        cell.classList.add("selected");
                        this.selected = id;

                        const info = new BoardInfo();
                        const piece = value.substring(1);
                        const pieceInfo = info.getPiece(piece);

                        // Display moves
                        const max = 36 * 36 - 1;
                        pieceInfo.moves.forEach((m) => {
                            let previous = id;
                            if (m.moveType === moveWalk || m.moveType === moveJump) {
                                const xPos = m.pos.x * (currPlayer === "0" ? -1 : 1);
                                const yPos = m.pos.y * (currPlayer === "1" ? -1 : 1);
                                for (let i = 1; i <= m.distance; i++) {
                                    const nextTile = id + yPos * i * 36 + xPos * i;
                                    if (
                                        nextTile < 0 ||
                                        nextTile > max || // We are out of the board on the lines
                                        Math.abs((nextTile % 36) - (previous % 36)) > 1
                                    ) {
                                        // We are out of board on the columns
                                        break;
                                    } else if (this.state.G.cells[nextTile] !== null) {
                                        if (this.state.G.cells[nextTile][0] !== value[0]) {
                                            cells[nextTile].classList.add("possible-attack");
                                        }
                                        if (m.moveType === moveWalk) {
                                            // Walk move need to be continious
                                            break;
                                        }
                                    } else {
                                        cells[nextTile].classList.add("possible-move");
                                        previous = nextTile;
                                    }
                                }
                            }
                        });
                    }
                }
            };
        });
    }

    update(state) {
        const info = new BoardInfo();
        const cells = this.rootElement.querySelectorAll(".cell");
        cells.forEach((cell) => {
            const cellId = parseInt(cell.dataset.id);
            const cellValue = state.G.cells[cellId];

            if (cellValue !== null) {
                const player = cellValue[0];
                const piece = cellValue.substring(1);

                const size = 40;
                if (player === "0") {
                    cell.innerHTML = `
                    <svg width="${size}" height="${size}">
                        <line x1="0" y1="0" x2="${size}" y2="0" stroke="black" />

                        <line x1="0" y1="0" x2="0" y2="${size / 2}" stroke="black" />
                        <line x1="${size}" y1="0" x2="${size}" y2="${size / 2}" stroke="black" />

                        <line x1="0" y1="${size / 2}" x2="${size / 2}" y2="${size}" stroke="black" />
                        <line x1="${size}" y1="${size / 2}" x2="${size / 2}" y2="${size}" stroke="black" />

                        <text x="50%" y="50%" class="small">${info.getPiece(piece).name}</text>
                    </svg>
                    `;
                } else {
                    cell.innerHTML = `
                    <svg width="${size}" height="${size}">
                        <line x1="0" y1="${size}" x2="${size}" y2="${size}" stroke="black" />

                        <line x1="0" y1="${size / 2}" x2="0" y2="${size}" stroke="black" />
                        <line x1="${size}" y1="${size / 2}" x2="${size}" y2="${size}" stroke="black" />

                        <line x1="0" y1="${size / 2}" x2="${size / 2}" y2="0" stroke="black" />
                        <line x1="${size}" y1="${size / 2}" x2="${size / 2}" y2="0" stroke="black" />

                        <text x="50%" y="80%" class="small">${info.getPiece(piece).name}</text>
                    </svg>
                    `;
                }
            } else {
                cell.innerHTML = "";
            }
        });
    }
}

new App(document.getElementById("app"));
