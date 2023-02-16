import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const TreacherousFox = new Piece("隠狐", "Treacherous Fox", "FFvWW", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
]);

// Alternative version with jumps
/*
export const TreacherousFox = new Piece("隠狐", "Treacherous Fox", "FFAGvWWvDvH(mAmG-FF)(mvDmvH-WW)", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveJump, new Vector2(0, 2), 1),
    new Move(moveJump, new Vector2(0, 3), 1),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveJump, new Vector2(0, -2), 1),
    new Move(moveJump, new Vector2(0, -3), 1),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
    new Move(moveJump, new Vector2(-2, 2), 1),
    new Move(moveJump, new Vector2(-3, 3), 1),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveJump, new Vector2(2, 2), 1),
    new Move(moveJump, new Vector2(3, 3), 1),
    new Move(moveWalk, new Vector2(-1, -1), Infinity),
    new Move(moveJump, new Vector2(-2, -2), 1),
    new Move(moveJump, new Vector2(-3, -3), 1),
    new Move(moveWalk, new Vector2(1, -1), Infinity),
    new Move(moveJump, new Vector2(2, -2), 1),
    new Move(moveJump, new Vector2(3, -3), 1)
]);
*/
