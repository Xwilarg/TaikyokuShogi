import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const OldKite = new Piece("古鵄", "Old Kite", "F2sW", [
    new Move(Move_Walk, new Vector2(1, 1), 2),
    new Move(Move_Walk, new Vector2(1, -1), 2),
    new Move(Move_Walk, new Vector2(-1, 1), 2),
    new Move(Move_Walk, new Vector2(-1, -1), 2),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(1, 0), 1),
]);