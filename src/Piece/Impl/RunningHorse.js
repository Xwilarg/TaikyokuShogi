import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const RunningHorse = new Piece("走馬", "Running Horse","bWbAfWWfFF",[
	new Move(moveWalk, new Vector2(1,-1), Infinity),
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(0,-1), 1),
	new Move(moveJump, new Vector2(2,-1), 1),
	new Move(moveJump, new Vector2(-2,-1), 1),
])