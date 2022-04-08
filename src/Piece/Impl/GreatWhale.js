import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GreatWhale = new Piece("大鯨", "GreatWhale", "FFvWW", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity),
    new Move(Move_Walk, new Vector2(-1, -1), Infinity),
    new Move(Move_Walk, new Vector2(1, -1), Infinity)
]);