import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const Lance = new Piece('香車', 'Lance', 'fWW', [
    new Move(Move_Walk, new Vector2(0, 1), Infinity)
])
