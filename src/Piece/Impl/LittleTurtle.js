import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const LittleTurtle = new Piece("(小亀", "Little Turtle","FFsW2vDvWW",[
	new Move(moveWalk, new Vector2(-1,1), Infinity),
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(1,0), 2),
	new Move(moveWalk, new Vector2(-1,0), 2),
	new Move(moveWalk, new Vector2(-1,-1), Infinity),
	new Move(moveWalk, new Vector2(1,-1), Infinity),
	new Move(moveWalk, new Vector2(0,-1), Infinity),
    new Move(moveJump, new Vector2(0,2), 1),
    new Move(moveJump, new Vector2(0,-2), 1),
])