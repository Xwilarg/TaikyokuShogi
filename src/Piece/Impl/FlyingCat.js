import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FlyingCat = new Piece("飛猫", "Flying Cat","bWbFfsHfG",[
	new Move(Move_Jump, new Vector2(0,3), 1),
	new Move(Move_Jump, new Vector2(3,0), 1),
	new Move(Move_Jump, new Vector2(-3,0), 1),
	new Move(Move_Jump, new Vector2(3,3), 1),
	new Move(Move_Jump, new Vector2(-3,3), 2),
	new Move(Move_Walk, new Vector2(-1,-1), 1),
	new Move(Move_Walk, new Vector2(1,-1), 1),
    new Move(Move_Walk, new Vector2(0,-1), 1)
])