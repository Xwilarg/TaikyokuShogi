import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const LongbowSoldier = new Piece(
    "弩兵",
    "Longbow Soldier",
    "bWsW2fWWfF3"[
        (new Move(moveWalk, new Vector2(0, 1), Infinity),
        new Move(moveWalk, new Vector2(1, 1), 3),
        new Move(moveWalk, new Vector2(-1, 1), 3),
        new Move(moveWalk, new Vector2(-1, 0), 2),
        new Move(moveWalk, new Vector2(1, 0), 2),
        new Move(moveWalk, new Vector2(0, -1), 1))
    ]
);
