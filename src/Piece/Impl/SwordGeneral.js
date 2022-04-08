import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SwordGeneral = new Piece("刀将", "Sword General", "bWfW3fF3", [
    new Move(Move_Walk, new Vector2(0, 1), 3),
    new Move(Move_Walk, new Vector2(0, -1), 1),
    new Move(Move_Walk, new Vector2(1, 1), 3),
    new Move(Move_Walk, new Vector2(-1, 1), 3)
]);