import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GooseWing = new Piece("鴻翼", "Goose Wing", "FsW3vWW", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), 3),
    new Move(moveWalk, new Vector2(1, 0), 3),
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
]);
