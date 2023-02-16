import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const CaptiveOfficer = new Piece('禽吏', 'Captive Officer', 'F3fsW2', [
    new Move(Move_Walk, new Vector2(0, 1), 2),
    new Move(Move_Walk, new Vector2(1, 0), 2),
    new Move(Move_Walk, new Vector2(-1, 0), 2),
    new Move(Move_Walk, new Vector2(1, -1), 3),
    new Move(Move_Walk, new Vector2(1, 1), 3),
    new Move(Move_Walk, new Vector2(-1, -1), 3),
    new Move(Move_Walk, new Vector2(-1, 1), 3)
])
