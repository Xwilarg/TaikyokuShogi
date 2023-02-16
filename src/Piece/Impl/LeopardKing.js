import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const LeopardKing = new Piece("豹王", "Leopard King", "W5F5", [
    new Move(moveWalk, new Vector2(0, -1), 5),
    new Move(moveWalk, new Vector2(0, 1), 5),
    new Move(moveWalk, new Vector2(1, 0), 5),
    new Move(moveWalk, new Vector2(-1, 0), 5),
    new Move(moveWalk, new Vector2(1, -1), 5),
    new Move(moveWalk, new Vector2(1, 1), 5),
    new Move(moveWalk, new Vector2(-1, -1), 5),
    new Move(moveWalk, new Vector2(-1, 1), 5),
]);
