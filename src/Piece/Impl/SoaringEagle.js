import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SoaringEagle = new Piece("飛鷲", "Soaring Eagle","WWFFfA",[
	new Move(moveWalk, new Vector2(-1,1), Infinity),
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(1,0), Infinity),
	new Move(moveWalk, new Vector2(-1,-1), Infinity),
	new Move(moveWalk, new Vector2(0,-1), Infinity),
	new Move(moveWalk, new Vector2(1,-1), Infinity),
	new Move(moveWalk, new Vector2(-1,0), Infinity),
    new Move(moveJump, new Vector2(2,2), 1),
    new Move(moveJump, new Vector2(2,-2), 1)
])