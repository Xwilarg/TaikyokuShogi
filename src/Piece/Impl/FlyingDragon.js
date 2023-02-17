import { Move } from "../Move";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingDragon = new Piece("飛龍", "Flying dragon", "A", [
    new Move(Move_Jump, new Vector2(2, 2), 1),
    new Move(Move_Jump, new Vector2(2, -2), 1),
    new Move(Move_Jump, new Vector2(-2, 2), 1),
    new Move(Move_Jump, new Vector2(-2, -2), 1),
]);
