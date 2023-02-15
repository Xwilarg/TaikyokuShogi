import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BearsEyes = new Piece("桂馬", "Knight", "ffN", [
    new Move(Move_Walk, new Vector2(2, 1), 1),
    new Move(Move_Walk, new Vector2(2, 1), -1)
]);