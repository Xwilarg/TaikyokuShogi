import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GuardianOfTheGods = new Piece("金剛", "Guardian of the Gods", "W3", [
    new Move(moveWalk, new Vector2(0, 1), 3),
    new Move(moveWalk, new Vector2(0, -1), 3),
    new Move(moveWalk, new Vector2(1, 0), 3),
    new Move(moveWalk, new Vector2(-1, 0), 3),
]);
