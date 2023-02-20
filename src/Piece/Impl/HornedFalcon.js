import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { moveJump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const HornedFalcon = new Piece("角鷹", "Horned Falcon","WWFFfD",[
	new Move(moveWalk, new Vector2(1,1), Infinity),
	new Move(moveWalk, new Vector2(0,1), Infinity),
	new Move(moveWalk, new Vector2(-1,1), Infinity),
	new Move(moveWalk, new Vector2(0,-1), Infinity),
	new Move(moveWalk, new Vector2(1,0), Infinity),
	new Move(moveWalk, new Vector2(-1,0), Infinity),
	new Move(moveWalk, new Vector2(1,-1), Infinity),
	new Move(moveWalk, new Vector2(-1,-1), Infinity),
    new Move(moveJump, new Vector2(0,2), 1)
])