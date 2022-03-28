import { Client } from 'boardgame.io/client';
import { Game } from './Game';

class App {
    constructor(rootElement) {
        this.client = Client({ game: Game });
        this.client.start();
        this.rootElement = rootElement;
        this.drawBoard();
        this.attachListeners();
    }

    drawBoard() {
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
            this.drawBoard();
            this.attachListeners();
        };
        const cells = this.rootElement.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.onclick = handleCellClick;
        });
    }
}

const app = new App(document.getElementById('app'));