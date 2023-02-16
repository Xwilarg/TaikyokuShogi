import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FireGeneral = new Piece("火将", "Fire General", "fFvW3", [
    new Move(moveWalk, new Vector2(0, 1), 3),
    new Move(moveWalk, new Vector2(0, -1), 3),
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
]);
