import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SpearGeneral = new Piece("鎗将", "Spear General", "bW2sW3fWW"[
    new Move(Move_Walk, new Vector2(0,1), Infinity),
    new Move(Move_Walk, new Vector2(1,0), 3),
    new Move(Move_Walk, new Vector2(-1,0), 3),
    new Move(Move_Walk, new Vector2(0,-1), 1)
])