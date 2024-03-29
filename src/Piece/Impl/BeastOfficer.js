import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BeastOfficer = new Piece("獣吏", "Beast Officer", "F3fsW2fnH", [
    new Move(moveWalk, new Vector2(0, 1), 3),
    new Move(moveWalk, new Vector2(1, 0), 2),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(1, -1), 3),
    new Move(moveWalk, new Vector2(1, 1), 3),
    new Move(moveWalk, new Vector2(-1, -1), 3),
    new Move(moveWalk, new Vector2(-1, 1), 3),
]);
