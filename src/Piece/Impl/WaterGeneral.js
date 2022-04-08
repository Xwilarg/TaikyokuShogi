import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const WaterGeneral = new Piece("水将", "Water General", "fF3vW", [
    new Move(Move_Walk, new Vector2(0, 1), 1),
    new Move(Move_Walk, new Vector2(0, -1), 1),
    new Move(Move_Walk, new Vector2(-1, 1), 3),
    new Move(Move_Walk, new Vector2(1, 1), 3)
]);