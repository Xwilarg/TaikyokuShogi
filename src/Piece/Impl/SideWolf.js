import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SideWolf = new Piece("瓦車", "Side Wolf", "flFbrFsWW", [
    new Move(Move_Walk, new Vector2(1, 0), Infinity),
    new Move(Move_Walk, new Vector2(-1, 0), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), 1),
    new Move(Move_Walk, new Vector2(1, -1), 1)
]);