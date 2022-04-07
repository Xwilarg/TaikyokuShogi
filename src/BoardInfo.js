import { EarthGeneral } from './Piece/Impl/EarthGeneral';
import { GoBetween } from './Piece/Impl/GoBetween';
import { IronGeneral } from './Piece/Impl/IronGeneral';
import { Pawn } from './Piece/Impl/Pawn';
import { StoneGeneral } from './Piece/Impl/StoneGeneral';
import { Dog } from './Piece/Impl/Dog';
import { SwoopingOwl } from './Piece/Impl/SwoopingOwl';
import { OldRat } from './Piece/Impl/OldRat';
import { StruttingCrow } from './Piece/Impl/StruttingCrow'
import { TileGeneral } from './Piece/Impl/TileGeneral';
import { SwordSoldier } from './Piece/Impl/SwordSoldier';
import { CopperGeneral } from './Piece/Impl/CopperGeneral';
import { FlyingGoose } from './Piece/Impl/Flying Goose';
import { ClimbingMonkey } from './Piece/Impl/ClimbingMonkey';

export class BoardInfo {
    constructor() {
        this.pieces = {
            " P": Pawn,
            "EA": EarthGeneral,
            "GB": GoBetween,
            "SG": StoneGeneral,
            " I": IronGeneral,
            " D": Dog,
            "OW": SwoopingOwl,
            "OR": OldRat,
            "ST": StruttingCrow,
            " T": TileGeneral,
            "SE": SwordSoldier,
            " C": CopperGeneral,
            "FY": FlyingGoose,
            "CM": ClimbingMonkey
        }

        // https://en.wikipedia.org/wiki/Taikyoku_shogi#Setup
        this.board =  [
            null, null, null, null, null, " D", null, null, null, null, "GB", null, null, null, " D", null, null, null, null, null, null, " D", null, null, null, "GB", null, null, null, null, " D", null, null, null, null, null,
            " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P",
            null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, "EA", null, "SG", null, " T", null, " I", null, null, " I", null, " T", null, "SG", null, "EA", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, "OW", "CM", null, null, null, null, null, null, null, "OR", null, null, null, null, null, null, null, null, "OR", null, null, null, null, null, null, null, "CM", "OW", null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, "FY", "ST", null, null, null, null, null, null, null, null, null, null, null, null, "ST", "FY", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, " C", null, null, " C", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
        ];
    }

    getPiece(id) {
        return this.pieces[id];
    }
}