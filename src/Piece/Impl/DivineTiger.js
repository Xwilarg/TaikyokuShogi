import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const DivineTiger = new Piece("神虎", "Divine Tiger", "bW2fsWWflFF", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), 2),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(1, 0), Infinity),
]);
