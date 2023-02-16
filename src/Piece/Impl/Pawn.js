import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Pawn = new Piece("歩兵", "Pawn", "fW", [new Move(moveWalk, new Vector2(0, 1), 1)]);
