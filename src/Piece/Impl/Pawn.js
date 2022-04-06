import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Pawn = new Piece("歩兵", "Pwn", "fW", [
    new Move(Move_Walk, new Vector2(0, 1))
]);