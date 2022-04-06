import { Client } from 'boardgame.io/client';
import { BoardInfo } from './BoardInfo';
import { Game } from './Game';

class App {
    constructor(rootElement) {
        this.client = Client({ game: Game });
        this.client.start();
        this.rootElement = rootElement;
        this.createBoard();
        this.attachListeners();

        this.client.subscribe(state => this.update(state));
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
            rows.push(`<tr>${cells.join('')}</tr>`);
        }

        this.rootElement.innerHTML = `
            <table>${rows.join('')}</table>
        `;
    }

    attachListeners() {
        const handleCellClick = event => {
            const id = parseInt(event.target.dataset.id);
            this.client.moves.clickCell(id);
        };
        const cells = this.rootElement.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.onclick = handleCellClick;
        });
    }

    update(state) {
        const info = new BoardInfo();
        // Get all the board cells.
        const cells = this.rootElement.querySelectorAll('.cell');
        // Update cells to display the values in game state.
        cells.forEach(cell => {
            const cellId = parseInt(cell.dataset.id);
            const cellValue = state.G.cells[cellId];

            if (cellValue !== null) {
                const size = 40;
                cell.innerHTML = `
                <svg width="${size}" height="${size}">
                    <line x1="0" y1="0" x2="${size}" y2="0" stroke="black" />
                    <line x1="0" y1="0" x2="0" y2="${size/2}" stroke="black" />
                    <line x1="${size}" y1="0" x2="${size}" y2="${size/2}" stroke="black" />
                    <line x1="00" y1="${size/2}" x2="${size/2}" y2="${size}" stroke="black" />
                    <line x1="${size}" y1="${size/2}" x2="${size/2}" y2="${size}" stroke="black" />
                    <text x="3" y="${size/2}" class="small">${info.getPiece(cellValue).name}</text>
                </svg>
                `;
            }
        });
    }
}

const app = new App(document.getElementById('app'));