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
import { FlyingHorse } from './Piece/Impl/FlyingHorse';
import { BeastCadet } from './Piece/Impl/BeastCadet';
import { King } from './Piece/Impl/King';
import { FragrantElephant } from './Piece/Impl/FragrantElephant';
import { WhiteElephant } from './Piece/Impl/WhiteElephant';
import { RushingBird } from './Piece/Impl/RushingBird';
import { AngryBoar } from './Piece/Impl/AngryBoar';
import { ViolentBear } from './Piece/Impl/ViolentBear';
import { EasternBarbarian } from './Piece/Impl/EasternBarbarian';
import { WesternBarbarian } from './Piece/Impl/WesternBarbarian';
import { NorthernBarbarian } from './Piece/Impl/NorthernBarbarian';
import { SouthernBarbarian } from './Piece/Impl/SouthernBarbarian';
import { PrancingStag } from './Piece/Impl/PrancingStag';
import { PoisonousSnake } from './Piece/Impl/PoisonousSnake';
import { OldKite } from './Piece/Impl/OldKite';
import { FierceEagle } from './Piece/Impl/FierceEagle';
import { GuardianOfTheGods } from './Piece/Impl/GuardianOfTheGods';
import { Wrestler } from './Piece/Impl/Wrestler';
import { CaptiveCadet } from './Piece/Impl/CaptiveCadet';
import { HorseGeneral } from './Piece/Impl/HorseGeneral';
import { OxGeneral } from './Piece/Impl/OxGeneral';
import { FireGeneral } from './Piece/Impl/FireGeneral';
import { WaterGeneral } from './Piece/Impl/WaterGeneral';
import { MountainGeneral } from './Piece/Impl/MountainGeneral';
import { BuddhistDevil } from './Piece/Impl/BuddhistDevil';
import { WindGeneral } from './Piece/Impl/WindGeneral';
import { RiverGeneral } from './Piece/Impl/RiverGeneral';
import { Yaksha } from './Piece/Impl/Yaksha';
import { SwordGeneral } from './Piece/Impl/SwordGeneral';
import { CaptiveOfficer } from './Piece/Impl/CaptiveOfficer';
import { BeastOfficer } from './Piece/Impl/BeastOfficer';
import { HeavenlyTetrarch } from './Piece/Impl/HeavenlyTetrarch';
import { ChickenGeneral } from './Piece/Impl/ChickenGeneral';
import { PupGeneral } from './Piece/Impl/PupGeneral';
import { PigGeneral } from './Piece/Impl/PigGeneral';
import { MountainStag } from './Piece/Impl/MountainStag';
import { LeopardKing } from './Piece/Impl/LeopardKing';
import { TurtleDove } from './Piece/Impl/TurtleDove';
import { CrossbowSoldier } from './Piece/Impl/CrossbowSoldier';
import { BurningSoldier } from './Piece/Impl/BurningSoldier';

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
            "EB": EnchantedBadger,
            "FH": FlyingHorse,
            "BC": BeastCadet,
            " K": King,
            "FG": FragrantElephant,
            "WE": WhiteElephant,
            "RB": RushingBird,
            "AB": AngryBoar,
            "VB": ViolentBear,
            "ES": EasternBarbarian,
            "WS": WesternBarbarian,
            "NB": NorthernBarbarian,
            "SU": SouthernBarbarian,
            "PR": PrancingStag,
            "PS": PoisonousSnake,
            "OK": OldKite,
            "EG": FierceEagle,
            "GU": GuardianOfTheGods,
            "WR": Wrestler,
            "CT": CaptiveCadet,
            " H": HorseGeneral,
            " O": OxGeneral,
            " F": FireGeneral,
            "WG": WaterGeneral,
            " M": MountainGeneral,
            "BD": BuddhistDevil,
            "WN": WindGeneral,
            "RE": RiverGeneral,
            "YA": Yaksha,
            "刀将": SwordGeneral,
            "CO": CaptiveOfficer,
            "BO": BeastOfficer,
            "四天王": HeavenlyTetrarch,
            "CG": ChickenGeneral,
            "PG": PupGeneral,
            "PI": PigGeneral,
            "MS": MountainStag,
            "豹王": LeopardKing,
            "TD": TurtleDove,
            "SC": CrossbowSoldier,
            "BN": BurningSoldier
        }

        // https://en.wikipedia.org/wiki/Taikyoku_shogi#Setup
        this.board =  [
            null, null, null, null, null, " D", null, null, null, null, "GB", null, null, null, " D", null, null, null, null, null, null, " D", null, null, null, "GB", null, null, null, null, " D", null, null, null, null, null,
            " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P", " P",
            null, null, null, null, null, null, null, "BN", null, null, "SE", null, null, null, null, null, "SC", null, null, "SC", null, null, null, null, null, "SE", null, null, "BN", null, null, null, null, null, null, null,
            null, null, null, "WN", "RE", " M", null, null, "GN", null, "EA", null, "SG", null, " T", null, " I", null, null, " I", null, " T", null, "SG", null, "EA", null, "GN", null, null, " M", "RE", "WN", null, null, null,
            null, null, "EB", null, "OW", "CM", "CS", null, "BM", "BT", null, null, "BB", "OR", null, "SN", "RD", null, null, "RD", "SN", null, "OR", "BB", null, null, "BT", "BM", null, "CS", "CM", "OW", null, "EB", null, null,
            null, null, null, "DO", "FH", "VB", "AB", "EW", null, "CK", "OM", "CC", "WS", "ES", "VS", "NT", null, null, null, null, "NT", "VS", "SU", "NB", "CC", "OM", "CK", null, "EW", null, "VB", "FH", "DO", null, null, null,
            null, null, null, null, "PR", null, "FL", "EG", null, "PS", "FY", "ST", "BI", "WG", " F", null, null, null, null, null, null, " F", "WG", "BI", "ST", "FY", "PS", null, "EG", "FL", null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "DV", "DS", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, "PI", "CG", "PG", " H", " O", null, null, null, null, null, "CT", null, null, null, null, null, null, null, null, "CT", null, null, null, null, null, " O", " H", "PG", "CG", "PI", null, null, null,
            null, null, null, null, null, null, null, null, "BO", null, null, "RB", "OK", null, null, null, " C", null, null, " C", null, null, null, "OK", null, null, null, "BO", null, null, null, null, null, null, null, null,
            null, "WE", "TD", null, "CO", null, null, "MS", null, null, null, null, null, null, "BD", "WR", " S", "NK", "DE", " S", "GU", "YA", null, null, null, null, null, null, "MS", null, null, "CO", null, "TD", "FG", null,
            null, null, null, null, null, null, null, "BC", null, null, null, null, null, null, null, "LG", " G", " K", "CP", " G", "RG", null, null, null, null, null, null, null, "BC", null, null, null, null, null, null, null
        ];
    }

    getPiece(id) {
        return this.pieces[id];
    }
}