import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BurningGeneral = new Piece(
    "(炮将",
    "Burning General",
    "bW2sW3fWWfFF"[
        (new Move(moveWalk, new Vector2(-1, 1), Infinity),
        new Move(moveWalk, new Vector2(0, 1), Infinity),
        new Move(moveWalk, new Vector2(1, 1), Infinity),
        new Move(moveWalk, new Vector2(1, 0), 3),
        new Move(moveWalk, new Vector2(-1, 0), 3),
        new Move(moveWalk, new Vector2(0, -1), 2))
    ]
);
