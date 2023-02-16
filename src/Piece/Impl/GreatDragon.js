import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GreatDragon = new Piece("大龍", "Great Dragon", "FFvW3", [
    new Move(moveWalk, new Vector2(0, 1), 3),
    new Move(moveWalk, new Vector2(0, -1), 3),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
]);
