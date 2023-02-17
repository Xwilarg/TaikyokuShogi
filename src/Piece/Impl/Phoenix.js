import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Phoenix = new Piece("鳳凰", "Phoenix","WA",[
	new Move(Move_Jump, new Vector2(2,2), 1),
	new Move(Move_Jump, new Vector2(2,-2), 1),
	new Move(Move_Jump, new Vector2(-2,-2), 1),
	new Move(Move_Jump, new Vector2(-2,2), 1),
	new Move(Move_Walk, new Vector2(1,0), ),
	new Move(Move_Walk, new Vector2(-1,0), ),
    new Move(Move_Walk, new Vector2(0,1), ),
	new Move(Move_Walk, new Vector2(0,-1), ),
])