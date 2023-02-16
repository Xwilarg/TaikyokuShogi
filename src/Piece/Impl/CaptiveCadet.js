import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const CaptiveCadet = new Piece('禽曹', 'Captive Cadet', 'F3fsW3', [
    new Move(Move_Walk, new Vector2(1, 1), 3),
    new Move(Move_Walk, new Vector2(1, -1), 3),
    new Move(Move_Walk, new Vector2(-1, 1), 3),
    new Move(Move_Walk, new Vector2(-1, -1), 3),
    new Move(Move_Walk, new Vector2(0, 1), 3),
    new Move(Move_Walk, new Vector2(-1, 0), 3),
    new Move(Move_Walk, new Vector2(-1, 0), 3)
])
