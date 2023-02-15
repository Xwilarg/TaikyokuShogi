import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const PeacefulMountain = new Piece("泰山", "Peaceful Mountain","FFfsW5",[
    new Move(Move_Walk, new Vector2(-1,1), Infinity),
    new Move(Move_Walk, new Vector2(0,1), 5),
    new Move(Move_Walk, new Vector2(1,1), Infinity),
    new Move(Move_Walk, new Vector2(1,0), 5),
    new Move(Move_Walk, new Vector2(-1,0), 5),
    new Move(Move_Walk, new Vector2(-1,-1), Infinity),
    new Move(Move_Walk, new Vector2(1,-1), Infinity)
])