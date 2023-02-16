import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BurningSoldier = new Piece("炮兵", "Burning Soldier", "fF5bWsW3fW7", [
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(0, 1), 7),
    new Move(moveWalk, new Vector2(1, 0), 3),
    new Move(moveWalk, new Vector2(-1, 0), 3),
    new Move(moveWalk, new Vector2(1, 1), 5),
    new Move(moveWalk, new Vector2(-1, 1), 5),
]);
