import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const StoneGeneral = new Piece("石将", "Stone general", "fF", [
    new Move(Move_Walk, new Vector2(1, 1), 1),
    new Move(Move_Walk, new Vector2(-1, 1), 1)
]);