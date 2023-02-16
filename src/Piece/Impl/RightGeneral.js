import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const RightGeneral = new Piece("右将", "Right General", "WF", [
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(1, 0), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
]);
