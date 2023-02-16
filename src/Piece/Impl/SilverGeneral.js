import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SilverGeneral = new Piece("銀将", "Silver General", "FfW", [
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
]);
