import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Lance = new Piece("香車", "Lance", "fWW", [new Move(moveWalk, new Vector2(0, 1), Infinity)]);
