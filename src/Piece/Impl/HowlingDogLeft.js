import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const HowlingDogLeft = new Piece("𠵇犬", "Howling Dog (Left)", "bWfWW", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), 1)
]);