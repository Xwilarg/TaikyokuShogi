import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GreatTurtle = new Piece("大亀", "Great Turtle","FFvHsW3vWW",[
	new Move(moveWalk, new Vector2(-1,1), Infinity),
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(-1,0), 3),
	new Move(moveWalk, new Vector2(1,0), 3),
	new Move(moveWalk, new Vector2(0,-1), Infinity),
	new Move(moveWalk, new Vector2(-1,-1), Infinity),
	new Move(moveWalk, new Vector2(1,-1), Infinity),
    new Move(moveJump, new Vector2(0,3), 1),
    new Move(moveJump, new Vector2(0,-3), 1),
])