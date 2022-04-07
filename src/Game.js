import { INVALID_MOVE } from 'boardgame.io/core';
import { BoardInfo } from './BoardInfo';

export const Game = {
    setup: () =>
    {
        let data = Array(36 * 36).fill(null);
        const info = new BoardInfo();

        const otherSide = info.board.reverse();
        for (let i = 0; i < info.board.length; i++) {
            if (otherSide[i] !== null) {
                data[i] = '0' + otherSide[i];
            }
        }
        for (let i = 0; i < info.board.length; i++) {
            if (info.board[i] !== null) {
                data[data.length - 1 - i] = '1' + info.board[i];
            }
        }

        return {
            cells: data
        };
    },
  
    moves: {
        clickCell: (G, ctx, id) => {
            G.cells[id] = ctx.currentPlayer + "P";
        }
    },

    turn: {
        minMoves: 1,
        maxMoves: 1,
    }
};
