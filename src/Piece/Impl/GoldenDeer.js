import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GoldenDeer = new Piece("金鹿", "Golden Deer", "bF2fFF", [
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity),
    new Move(Move_Walk, new Vector2(-1, -1), 2),
    new Move(Move_Walk, new Vector2(1, -1), 2)
]);