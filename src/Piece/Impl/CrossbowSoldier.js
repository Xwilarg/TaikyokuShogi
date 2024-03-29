import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const CrossbowSoldier = new Piece("弓兵", "CrossbowSoldier", "fF3bWsW3fW5", [
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(0, 1), 5),
    new Move(moveWalk, new Vector2(1, 0), 3),
    new Move(moveWalk, new Vector2(-1, 0), 3),
    new Move(moveWalk, new Vector2(1, 1), 3),
    new Move(moveWalk, new Vector2(-1, 1), 3),
]);
