import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const CloudEagle = new Piece("雲鷲", "Cloud Eagle", "sWfF3vWW", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(1, 0), 1),
    new Move(Move_Walk, new Vector2(-1, 1), 3),
    new Move(Move_Walk, new Vector2(1, 1), 3)
]);