import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

// Name is made of 2 characters that don't have an unicode equivalent:
// https://ja.m.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Kanji_-_%E5%8F%A4+%E5%AF%BA.svg
// https://ja.m.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Kanji_-_%E6%99%82+%E9%B3%A5.svg
export const BirdOfParadise = new Piece("⿰古寺⿱時鳥", "Bird of Paradise", "vWWfFF", [
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(1, 1), Infinity),
    new Move(moveWalk, new Vector2(-1, 1), Infinity),
]);
