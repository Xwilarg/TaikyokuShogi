import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SideSoldier = new Piece("横兵", "Side Soldier", "bWfW2sWW", [
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(1, 0), Infinity),
]);
