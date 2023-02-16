import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Rook = new Piece("飛車", "Rook", "WW", [
    new Move(moveWalk, new Vector2(1, 0), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
]);
