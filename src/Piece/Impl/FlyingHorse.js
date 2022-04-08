import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingHorse = new Piece("馬麟", "Flying Horse", "F2", [
    new Move(Move_Walk, new Vector2(-1, -1), 2),
    new Move(Move_Walk, new Vector2(1, -1), 2),
    new Move(Move_Walk, new Vector2(-1, 1), 2),
    new Move(Move_Walk, new Vector2(1, 1), 2),
]);