import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const WhiteElephant = new Piece("白象", "White Elephant", "W2F2", [
    new Move(moveWalk, new Vector2(-1, -1), 2),
    new Move(moveWalk, new Vector2(1, -1), 2),
    new Move(moveWalk, new Vector2(-1, 1), 2),
    new Move(moveWalk, new Vector2(1, 1), 2),
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(1, 0), 2),
    new Move(moveWalk, new Vector2(-1, 0), 2),
    new Move(moveWalk, new Vector2(0, -1), 2),
]);
