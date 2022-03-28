import { INVALID_MOVE } from 'boardgame.io/core';
import { BoardInfo } from './BoardInfo';

export const Game = {
    setup: () =>
    {
        let info = new BoardInfo();
        let data = Array(36 * 36).fill(null);
        data[0] = info.getPiece("pa");
        return {
            cells: data
        };
    },
  
    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        },
        
        drawTile: (G, ctx) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        }
    },

    turn: {
        minMoves: 1,
        maxMoves: 1,
    }
};
