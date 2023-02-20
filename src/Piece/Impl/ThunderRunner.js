import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const ThunderRunner = new Piece("雷走", "Thunder Runner", "bsW4fWWfFF", [
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 0), 4),
    new Move(moveWalk, new Vector2(0, -1), 4),
    new Move(moveWalk, new Vector2(-1, 0), 4),
]);
