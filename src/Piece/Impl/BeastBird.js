import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const BeastBird = new Piece("獣鳥", "Beast Bird", "FFbW2sW3fWW",[
    new Move(Move_Walk, new Vector2(-1,1), Infinity),
    new Move(Move_Walk, new Vector2(0,1), Infinity),
    new Move(Move_Walk, new Vector2(1,1), Infinity),
    new Move(Move_Walk, new Vector2(-1,1), Infinity),
    new Piece(Move_Walk, new Vector2(-1,-1), Infinity),
    new Piece(Move_Walk, new Vector2(1,0), 3),
    new Move(Move_Walk, new Vector2(-1,0), 3),
    new Move(Move_Walk, new Vector2(0,-1), 2)
])