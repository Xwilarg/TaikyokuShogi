import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FreePup = new Piece("奔狗", "Free Pup", "FsW2vWWfFF", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(1, 0), 2),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
]);
