import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BurningChariot = new Piece("炮車", "BurningChariot", "WfFFvWW", [
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(1, 0), 1),
]);
