import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const AngryBoar = new Piece("嗔猪", "Angry Boar", "fF2fsW", [
    new Move(moveWalk, new Vector2(-1, 1), 2),
    new Move(moveWalk, new Vector2(1, 1), 2),
    new Move(moveWalk, new Vector2(1, 0), 1),
    new Move(moveWalk, new Vector2(-1, 0), 1),
    new Move(moveWalk, new Vector2(0, 1), 1),
]);
