import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SpearSoldier = new Piece("鎗兵", "Spear Soldier", "WfWW", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), 1),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(1, 0), 1)
]);