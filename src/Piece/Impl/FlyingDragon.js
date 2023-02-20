import { Move } from "../Move";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingDragon = new Piece("飛龍", "Flying dragon", "A", [
    new Move(moveJump, new Vector2(2, 2), 1),
    new Move(moveJump, new Vector2(2, -2), 1),
    new Move(moveJump, new Vector2(-2, 2), 1),
    new Move(moveJump, new Vector2(-2, -2), 1),
]);
