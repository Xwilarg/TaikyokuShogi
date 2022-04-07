import { EarthGeneral } from './Piece/Impl/EarthGeneral';
import { GoBetween } from './Piece/Impl/GoBetween';
import { IronGeneral } from './Piece/Impl/IronGeneral';
import { Pawn } from './Piece/Impl/Pawn';
import { StoneGeneral } from './Piece/Impl/StoneGeneral';
import { Dog } from './Piece/Impl/Dog';

export class BoardInfo {
    constructor() {
        this.pieces = {
            " P": Pawn,
            "EA": EarthGeneral,
            "GB": GoBetween,
            "SG": StoneGeneral,
            " I": IronGeneral,
            " D": Dog
        }

        // https://en.wikipedia.org/wiki/Taikyoku_shogi#Setup
        this.board =  [
            null, null, null, null, null, " D", null, null, null, null, "GB", null, null, null, " D", null, null, null, null, null, null, " D", null, null, null, "GB", null, null, null, null, " D", null, null, null, null, null,
            " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P",
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, "EA", null, "SG", null, null, null, " I", null, null, " I", null, null, null, "SG", null, "EA", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
        ];
    }

    getPiece(id) {
        return this.pieces[id];
    }
}