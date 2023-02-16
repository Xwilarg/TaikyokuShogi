import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const ElephantKing = new Piece("象王", "Elephant King", "W2FF", [
    new Move(moveWalk, new Vector2(0, -1), 2),
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(1, 0), 2),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
]);
