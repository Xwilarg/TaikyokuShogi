import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const LeftMountainEagle = new Piece("(左山鷲", "Left Mountain Eagle","WWlAbrF2fFFblFF",[
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,-1), Infinity),
	new Move(Move_Walk, new Vector2(-1,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), 2),
	new Move(Move_Walk, new Vector2(-1,0), Infinity),
	new Move(Move_Walk, new Vector2(1,0), Infinity),
    new Move(Move_Jump, new Vector2(2,2), 1),
    new Move(Move_Jump, new Vector2(2,-2), 1)
])