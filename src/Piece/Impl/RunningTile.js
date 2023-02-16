import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const RunningTile = new Piece("走瓦", "Running Tile", "sW2vWW", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(1, 0), 2),
]);
