import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const TigerSoldier = new Piece("虎兵", "Tiger Soldier", "bWfW2fFF", [
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
]);
