import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const TigerSoldier = new Piece('虎兵', 'Tiger Soldier', 'bWfW2fFF', [
    new Move(Move_Walk, new Vector2(0, 1), 2),
    new Move(Move_Walk, new Vector2(0, -1), 1),
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity)
])
