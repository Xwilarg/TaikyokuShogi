import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const TurtleDove = new Piece("山鳩", "Turtle Dove", "fF5bsW", [
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(1, 0), 1),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(1, 1), 5),
    new Move(moveWalk, new Vector2(-1, 1), 5),
]);
