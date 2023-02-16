import { Move } from '../Move'
import { Move_Jump } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const Knight = new Piece('桂馬', 'Knight', 'ffN', [
    new Move(Move_Jump, new Vector2(2, 1), 1),
    new Move(Move_Jump, new Vector2(2, 1), -1)
])
