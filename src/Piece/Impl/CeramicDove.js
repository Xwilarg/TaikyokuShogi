import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const CeramicDove = new Piece('鳩盤', 'Ceramic Dove', 'W2FF', [
    new Move(Move_Walk, new Vector2(0, -1), 2),
    new Move(Move_Walk, new Vector2(0, 1), 2),
    new Move(Move_Walk, new Vector2(1, 0), 2),
    new Move(Move_Walk, new Vector2(-1, 0), 2),
    new Move(Move_Walk, new Vector2(-1, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, -1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity)
])
