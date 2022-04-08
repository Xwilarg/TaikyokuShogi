import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const CoiledDragon = new Piece("蟠龍", "Coiled Dragon", "vWWbFF", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, -1), Infinity),
    new Move(Move_Walk, new Vector2(1, -1), Infinity)
]);