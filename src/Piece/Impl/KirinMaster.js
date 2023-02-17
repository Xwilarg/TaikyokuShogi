import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const KirinMaster = new Piece("麟師", "Kirin Master","FFvHsW3vWW",[
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(-1,0), 3),
	new Move(Move_Walk, new Vector2(1,0), 3),
	new Move(Move_Walk, new Vector2(0,-1), Infinity),
	new Move(Move_Walk, new Vector2(-1,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), Infinity),
    new Move(Move_Jump, new Vector2(0,3), 1),
    new Move(Move_Jump, new Vector2(0,-3), 1),
])