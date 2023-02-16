import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Oxcart = new Piece("牛車", "Oxcart", "fWW", [new Move(moveWalk, new Vector2(0, 1), Infinity)]);
