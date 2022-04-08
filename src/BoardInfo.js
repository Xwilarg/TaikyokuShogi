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
import { GoldGeneral } from './Piece/Impl/GoldGeneral';
import { ViolentWolf } from './Piece/Impl/ViolentWolf';
import { FerociousLeopard } from './Piece/Impl/FerociousLeopard';
import { BlindMonkey } from './Piece/Impl/BlindMonkey';
import { BlindBear } from './Piece/Impl/BlindBear';
import { DrunkenElephant } from './Piece/Impl/DrunkenElephant';
import { NeighboringKing } from './Piece/Impl/NeighboringKing';
import { RushingBoar } from './Piece/Impl/RushingBoar';
import { Deva } from './Piece/Impl/Deva';
import { DarkSpirit } from './Piece/Impl/DarkSpirit';
import { BlindTiger } from './Piece/Impl/BlindTiger';
import { Prince } from './Piece/Impl/Prince';
import { LeftGeneral } from './Piece/Impl/Left General';
import { RightGeneral } from './Piece/Impl/Right General';
import { BearsEyes } from './Piece/Impl/BearsEyes';
import { VenomousWolf } from './Piece/Impl/VenomousWolf';
import { WoodGeneral } from './Piece/Impl/WoodGeneral';
import { Donkey } from './Piece/Impl/Donkey';
import { EnchantedBadger } from './Piece/Impl/EnchantedBadger';

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
            "OM": OldMonkey,
            " G": GoldGeneral,
            "NT": ViolentWolf,
            "FL": FerociousLeopard,
            "BM": BlindMonkey,
            "BB": BlindBear,
            "DE": DrunkenElephant,
            "NK": NeighboringKing,
            "行猪": RushingBoar,
            "DV": Deva,
            "DS": DarkSpirit,
            "BT": BlindTiger,
            "CP": Prince,
            "LG": LeftGeneral,
            "RG": RightGeneral,
            "熊眼": BearsEyes,
            "毒狼": VenomousWolf,
            "GN": WoodGeneral,
            "DO": Donkey,
            "EB": EnchantedBadger
        }

        // https://en.wikipedia.org/wiki/Taikyoku_shogi#Setup
        this.board =  [
            null, null, null, null, null, " D", null, null, null, null, "GB", null, null, null, " D", null, null, null, null, null, null, " D", null, null, null, "GB", null, null, null, null, " D", null, null, null, null, null,
            " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P",
            null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "SE", null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, "GN", null, "EA", null, "SG", null, " T", null, " I", null, null, " I", null, " T", null, "SG", null, "EA", null, "GN", null, null, null, null, null, null, null, null,
            null, null, "EB", null, "OW", "CM", "CS", null, "BM", "BT", null, null, "BB", "OR", null, "SN", "RD", null, null, "RD", "SN", null, "OR", "BB", null, null, "BT", "BM", null, "CS", "CM", "OW", null, "EB", null, null,
            null, null, null, "DO", null, null, null, "EW", null, "CK", "OM", "CC", null, null, "VS", "NT", null, null, null, null, "NT", "VS", null, null, "CC", "OM", "CK", null, "EW", null, null, null, "DO", null, null, null,
            null, null, null, null, null, null, "FL", null, null, null, "FY", "ST", "BI", null, null, null, null, null, null, null, null, null, null, "BI", "ST", "FY", null, null, null, "FL", null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "DV", "DS", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, " C", null, null, " C", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, " S", "NK", "DE", " S", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "LG", " G", null, "CP", " G", "RG", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
        ];
    }

    getPiece(id) {
        return this.pieces[id];
    }
}