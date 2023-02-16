import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const PigGeneral = new Piece("豚将", "Pig General", "bW2fF4", [
    new Move(moveWalk, new Vector2(0, -1), 2),
    new Move(moveWalk, new Vector2(1, 1), 4),
    new Move(moveWalk, new Vector2(-1, 1), 4),
]);
