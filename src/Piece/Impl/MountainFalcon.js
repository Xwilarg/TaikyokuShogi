import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const MountainFalcon = new Piece("山鷹", "Mountain Falcon","fDbF2WWfFF",[
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(1,0), Infinity),
	new Move(Move_Walk, new Vector2(-1,0), Infinity),
	new Move(Move_Walk, new Vector2(-1,0), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), 2),
	new Move(Move_Walk, new Vector2(-1,-1), 2),
    new Move(Move_Jump, new Vector2(0,2), 1)
])