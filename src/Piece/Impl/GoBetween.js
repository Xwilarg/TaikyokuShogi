import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GoBetween = new Piece("仲人", "Go Between", "vW", [new Move(moveWalk, new Vector2(0, 1), 1), new Move(moveWalk, new Vector2(0, -1), 1)]);
