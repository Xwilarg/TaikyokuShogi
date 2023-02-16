import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const HeavenlyTetrarch = new Piece('四天王', 'Heavenly Tetrarch', 'W4F4', [
    new Move(Move_Walk, new Vector2(0, 1), 4),
    new Move(Move_Walk, new Vector2(0, -1), 4),
    new Move(Move_Walk, new Vector2(1, 0), 4),
    new Move(Move_Walk, new Vector2(-1, 0), 4),
    new Move(Move_Walk, new Vector2(1, -1), 4),
    new Move(Move_Walk, new Vector2(1, 1), 4),
    new Move(Move_Walk, new Vector2(-1, -1), 4),
    new Move(Move_Walk, new Vector2(-1, 1), 4)
])
