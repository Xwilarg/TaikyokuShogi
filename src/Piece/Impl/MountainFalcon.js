import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const MountainFalcon = new Piece("山鷹", "Mountain Falcon","fDbF2WWfFF",[
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(1,0), Infinity),
	new Move(moveWalk, new Vector2(-1,0), Infinity),
	new Move(moveWalk, new Vector2(-1,0), Infinity),
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(-1,1), Infinity),
	new Move(moveWalk, new Vector2(1,-1), 2),
	new Move(moveWalk, new Vector2(-1,-1), 2),
    new Move(moveJump, new Vector2(0,2), 1)
])