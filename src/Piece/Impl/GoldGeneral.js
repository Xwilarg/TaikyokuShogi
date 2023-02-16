import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GoldGeneral = new Piece("金将", "Gold General", "WfF", [
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, 0), 1),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(0, -1), 1),
]);
