import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Phoenix = new Piece("鳳凰", "Phoenix","WA",[
	new Move(moveJump, new Vector2(2,2), 1),
	new Move(moveJump, new Vector2(2,-2), 1),
	new Move(moveJump, new Vector2(-2,-2), 1),
	new Move(moveJump, new Vector2(-2,2), 1),
	new Move(moveWalk, new Vector2(1,0), ),
	new Move(moveWalk, new Vector2(-1,0), ),
    new Move(moveWalk, new Vector2(0,1), ),
	new Move(moveWalk, new Vector2(0,-1), ),
])