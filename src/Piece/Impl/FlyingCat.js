import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingCat = new Piece("飛猫", "Flying Cat","bWbFfsHfG",[
	new Move(moveJump, new Vector2(0,3), 1),
	new Move(moveJump, new Vector2(3,0), 1),
	new Move(moveJump, new Vector2(-3,0), 1),
	new Move(moveJump, new Vector2(3,3), 1),
	new Move(moveJump, new Vector2(-3,3), 2),
	new Move(moveWalk, new Vector2(-1,-1), 1),
	new Move(moveWalk, new Vector2(1,-1), 1),
    new Move(moveWalk, new Vector2(0,-1), 1)
])