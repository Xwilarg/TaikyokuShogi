import { Move } from "../Move";
import { moveJump } from "../MoveType";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const Kirin = new Piece("麒麟", "Kirin","FsD",[
	new Move(moveJump, new Vector2(-2,0), 1),
	new Move(moveJump, new Vector2(2,0), 1),
	new Move(moveWalk, new Vector2(1,1), 1),
	new Move(moveWalk, new Vector2(1,-1), 1),
	new Move(moveWalk, new Vector2(-1,1), 1),
	new Move(moveWalk, new Vector2(-1,-1), 1),
])