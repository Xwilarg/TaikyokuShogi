import { Move } from "../Move";
import { Move_Jump } from "../MoveType";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Kirin = new Piece("麒麟", "Kirin","FsD",[
	new Move(Move_Jump, new Vector2(-2,0), 1),
	new Move(Move_Jump, new Vector2(2,0), 1),
	new Move(Move_Walk, new Vector2(1,1), 1),
	new Move(Move_Walk, new Vector2(1,-1), 1),
	new Move(Move_Walk, new Vector2(-1,1), 1),
	new Move(Move_Walk, new Vector2(-1,-1), 1),
])