import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingCock = new Piece("鶏飛", "Flying Cock", "sWfF", [
    new Move(moveWalk, new Vector2(1, 0), 1),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, 1), 1),
]);
