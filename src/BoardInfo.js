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
import { RecliningDragon } from './Piece/Impl/RecliningDragon';
import { CoiledSerpent } from './Piece/Impl/CoiledSerpent';
import { FlyingCock } from './Piece/Impl/FlyingCock';
import { CatSword } from './Piece/Impl/CatSword';
import { EvilWolf } from './Piece/Impl/EvilWolf';
import { SilverGeneral } from './Piece/Impl/SilverGeneral';
import { ViolentStag } from './Piece/Impl/ViolentStag';
import { BlindDog } from './Piece/Impl/BlindDog';
import { ChineseCock } from './Piece/Impl/ChineseCock';
import { OldMonkey } from './Piece/Impl/OldMonkey';

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
            "CM": ClimbingMonkey,
            "RD": RecliningDragon,
            "SN": CoiledSerpent,
            "CK": FlyingCock,
            "CS": CatSword,
            "EW": EvilWolf,
            " S": SilverGeneral,
            "VS": ViolentStag,
            "BI": BlindDog,
            "CC": ChineseCock,
            "OM": OldMonkey
        }

        // https://en.wikipedia.org/wiki/Taikyoku_shogi#Setup
        this.board =  [
            null, null, null, null, null, " D", null, null, null, null, "GB", null, null, null, " D", null, null, null, null, null, null, " D", null, null, null, "GB", null, null, null, null, " D", null, null, null, null, null,
            " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P",
            null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, "EA", null, "SG", null, " T", null, " I", null, null, " I", null, " T", null, "SG", null, "EA", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, "OW", "CM", "CS", null, null, null, null, null, null, "OR", null, "SN", "RD", null, null, "RD", "SN", null, "OR", null, null, null, null, null, null, "CS", "CM", "OW", null, null, null, null,
            null, null, null, null, null, null, null, "EW", null, "CK", "OM", "CC", null, null, "VS", null, null, null, null, null, null, "VS", null, null, "CC", "OM", "CK", null, "EW", null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, "FY", "ST", "BI", null, null, null, null, null, null, null, null, null, null, "BI", "ST", "FY", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, " C", null, null, " C", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, " S", null, null, " S", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
        ];
    }

    getPiece(id) {
        return this.pieces[id];
    }
}