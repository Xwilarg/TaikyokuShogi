import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const PlayfulCockatoo = new Piece("遊䳇", "Playful Cockatoo","bF2fF3sW5vWW",[
    	new Move(Move_Walk, new Vector2(-1,1), 3),
    	new Move(Move_Walk, new Vector2(0,1), Infinity),
    	new Move(Move_Walk, new Vector2(1,1), 3),
    	new Move(Move_Walk, new Vector2(0,-1), Infinity),
    	new Move(Move_Walk, new Vector2(1,0), 5),
    	new Move(Move_Walk, new Vector2(-1,0), 5),
	    new Move(Move_Walk, new Vector2(-1,1), 2),
	    new Move(Move_Walk, new Vector2(1,-1), 2)
])