import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const NorthernBarbarian = new Piece("北狄", "Northern Barbarian", "WfFsnD", [
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(1, 0), 2),
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
]);
