"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
class Vehicle {
    constructor() {
        this.id = 0;
        this.carClass = "";
        this.order = 0;
        this.brand = "";
        this.model = "";
        this.rarity = "";
        this.stars = 0;
        this.maxRank = 0;
        this.epics = 0;
        this.obtainableVia = "";
        this.garageLevel = 0;
        this.topSpeed = 0;
        this.acceleration = 0;
        this.handling = 0;
        this.nitro = 0;
        this.nitroTS = 0;
        this.unknown = 0;
        this.perfectNitroTS = 0;
        this.added = "";
        this.addedWith = "";
        this.addedDate = new Date();
        this.totalUpgradeCost = 0;
        this.totalGlPoints = 0;
        this.country = "";
        this.tags = "";
        this.bPs1 = 0;
        this.bPs2 = 0;
        this.bPs3 = 0;
        this.bPs4 = 0;
        this.bPs5 = 0;
        this.bPs6 = 0;
        this.totalBps = 0;
        this.unknown2 = 0;
        this.costEpic = 0;
    }
}
let output = fs.readFileSync("../Resources/asphalt-legends-unite-database-cars.csv");
let rows = output.toString().split("\n");
let vehicles = [];
function customParseInt(value) {
    if (value.length === 0) {
        return 0;
    }
    if (isNaN(parseInt(value))) {
        return 0;
    }
    return parseInt(value);
}
rows.map((row, index) => {
    if (index !== 0) {
        let parsedRow = row.split(",");
        let tmpVehicle = new Vehicle();
        tmpVehicle.id = customParseInt(parsedRow[0]);
        tmpVehicle.carClass = parsedRow[1];
        tmpVehicle.order = customParseInt(parsedRow[2]);
        tmpVehicle.brand = parsedRow[3];
        tmpVehicle.model = parsedRow[4];
        tmpVehicle.rarity = parsedRow[5];
        tmpVehicle.stars = customParseInt(parsedRow[6]);
        tmpVehicle.maxRank = customParseInt(parsedRow[7]);
        tmpVehicle.epics = customParseInt(parsedRow[8]);
        tmpVehicle.obtainableVia = parsedRow[9];
        tmpVehicle.garageLevel = customParseInt(parsedRow[10]);
        tmpVehicle.topSpeed = customParseInt(parsedRow[11]);
        tmpVehicle.acceleration = customParseInt(parsedRow[12]);
        tmpVehicle.handling = customParseInt(parsedRow[13]);
        tmpVehicle.nitro = customParseInt(parsedRow[14]);
        tmpVehicle.nitroTS = customParseInt(parsedRow[15]);
        tmpVehicle.unknown = customParseInt(parsedRow[16]);
        tmpVehicle.perfectNitroTS = customParseInt(parsedRow[17]);
        tmpVehicle.added = parsedRow[18];
        tmpVehicle.addedWith = parsedRow[19];
        tmpVehicle.addedDate = parsedRow[20];
        tmpVehicle.totalUpgradeCost = customParseInt(parsedRow[21]);
        tmpVehicle.totalGlPoints = customParseInt(parsedRow[22]);
        tmpVehicle.country = parsedRow[23];
        tmpVehicle.tags = parsedRow[24];
        tmpVehicle.bPs1 = customParseInt(parsedRow[25]);
        tmpVehicle.bPs2 = customParseInt(parsedRow[26]);
        tmpVehicle.bPs3 = customParseInt(parsedRow[27]);
        tmpVehicle.bPs4 = customParseInt(parsedRow[28]);
        tmpVehicle.bPs5 = customParseInt(parsedRow[29]);
        tmpVehicle.bPs6 = customParseInt(parsedRow[30]);
        tmpVehicle.totalBps = customParseInt(parsedRow[31]);
        tmpVehicle.unknown2 = customParseInt(parsedRow[32]);
        tmpVehicle.costEpic = customParseInt(parsedRow[33]);
        vehicles.push(tmpVehicle);
    }
});
vehicles.map((vehicle) => {
    console.log(vehicle);
});
