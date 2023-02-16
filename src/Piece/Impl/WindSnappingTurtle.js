import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const WindSnappingTurtle = new Piece('風鼈', 'Wind Snapping Turtle', 'fF2vWW', [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 1), 2)
])
