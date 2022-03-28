import { INVALID_MOVE } from 'boardgame.io/core';

export const TaikyokuShogi = {
    setup: () => ({ cells: Array(36 * 36).fill(null) }),
  
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
