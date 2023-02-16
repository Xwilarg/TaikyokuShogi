import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const WhiteTiger = new Piece("白虎", "White Tiger", "vW2sWWflFF", [
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), 2),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(1, 0), Infinity),
]);
