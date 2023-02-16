import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Wrestler = new Piece("力士", "Wrestler", "F3", [
    new Move(moveWalk, new Vector2(1, 1), 3),
    new Move(moveWalk, new Vector2(1, -1), 3),
    new Move(moveWalk, new Vector2(-1, 1), 3),
    new Move(moveWalk, new Vector2(-1, -1), 3),
]);
