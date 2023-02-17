import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const RunningHorse = new Piece("走馬", "Running Horse","bWbAfWWfFF",[
	new Move(Move_Walk, new Vector2(1,-1), Infinity),
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,-1), 1),
	new Move(Move_Jump, new Vector2(2,-1), 1),
	new Move(Move_Jump, new Vector2(-2,-1), 1),
])