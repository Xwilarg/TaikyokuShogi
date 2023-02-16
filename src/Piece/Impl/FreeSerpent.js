import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FreeSerpent = new Piece("奔蛇", "Free Serpent", "vWWbFF", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
]);
