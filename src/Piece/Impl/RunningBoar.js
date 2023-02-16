import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const RunningBoar = new Piece("走猪", "Running Boar", "WvWW", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(0, 1), 1),
]);
