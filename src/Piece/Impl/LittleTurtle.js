import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const LittleTurtle = new Piece("(小亀", "Little Turtle","FFsW2vDvWW",[
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(1,0), 2),
	new Move(Move_Walk, new Vector2(-1,0), 2),
	new Move(Move_Walk, new Vector2(-1,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), Infinity),
	new Move(Move_Walk, new Vector2(0,-1), Infinity),
    new Move(Move_Jump, new Vector2(0,2), 1),
    new Move(Move_Jump, new Vector2(0,-2), 1),
])