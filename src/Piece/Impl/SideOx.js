import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SideOx = new Piece("横牛", "Side Ox", "frFblFsWW", [
    new Move(moveWalk, new Vector2(1, 0), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
]);
