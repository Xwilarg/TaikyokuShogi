import { Move } from "../Move";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Knight = new Piece("桂馬", "Knight", "ffN", [new Move(moveJump, new Vector2(1, 2), 1), new Move(moveJump, new Vector2(-1, 2), 1)]);
