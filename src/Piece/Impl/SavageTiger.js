import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const SavageTiger = new Piece("猛虎", "Savage Tiger", "fWW", [new Move(moveWalk, new Vector2(0, 1), Infinity)]);
