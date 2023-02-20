import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const PhoenixMaster = new Piece("鳳師", "Phoenix-Master","FFfGsW3vWW",[
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(-1,0), 3),
	new Move(Move_Walk, new Vector2(1,0), 3),
	new Move(Move_Walk, new Vector2(0,-1), Infinity),
	new Move(Move_Walk, new Vector2(-1,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), Infinity),
    new Move(Move_Jump, new Vector2(3,3), 1),
    new Move(Move_Jump, new Vector2(-3,3), 1),
])