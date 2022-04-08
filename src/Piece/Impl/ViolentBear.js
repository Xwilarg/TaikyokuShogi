import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const ViolentBear = new Piece("猛熊", "Violent Bear", "fF2fsW", [
    new Move(Move_Walk, new Vector2(-1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 0), 1),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(0, 1), 1)
]);

// Alternative version:
/*
export const ViolentBear = new Piece("猛熊", "Violent Bear", "FsWfnA", [
    new Move(Move_Walk, new Vector2(-1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 0), 1),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(1, -1), 1),
    new Move(Move_Walk, new Vector2(-1, -1), 1)
]);
*/