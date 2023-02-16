import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const CopperChariot = new Piece('銅車', 'Copper Chariot', 'fF3vWW', [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), 3),
    new Move(Move_Walk, new Vector2(1, 1), 3)
])
