import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const EarthDragon = new Piece("虎兵", "Earth Dragon", "fFbWfW2bFF", [
    new Move(moveWalk, new Vector2(0, 1), 2),
    new Move(moveWalk, new Vector2(0, -1), 1),
    new Move(moveWalk, new Vector2(-1, 1), 1),
    new Move(moveWalk, new Vector2(1, 1), 1),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
]);

/*
ALTERNATIVE VERSION
export const EarthDragon = new Piece("虎兵", "Earth Dragon", "fWfF2bFF", [
    new Move(moveWalk, new Vector2(0, 1), 1),
    new Move(moveWalk, new Vector2(-1, 1), 2),
    new Move(moveWalk, new Vector2(1, 1), 2),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity)
]);
*/
