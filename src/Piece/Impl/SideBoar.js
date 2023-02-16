import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SideBoar = new Piece("横猪", "Side Boar", "WFsWW", [
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(1, 0), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(0, -1), 1),
]);
