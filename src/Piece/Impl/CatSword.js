import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const CatSword = new Piece("猫刄", "Cat Sword", "F", [
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(1, -1), 1),
    new Move(moveWalk, new Vector2(-1, -1), 1),
    new Move(moveWalk, new Vector2(-1, 1), 1),
]);
