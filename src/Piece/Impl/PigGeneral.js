import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const PigGeneral = new Piece("豚将", "Pig General", "bW2fF4", [
    new Move(Move_Walk, new Vector2(0, -1), 2),
    new Move(Move_Walk, new Vector2(1, 1), 4),
    new Move(Move_Walk, new Vector2(-1, 1), 4),
]);