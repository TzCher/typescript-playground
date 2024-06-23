"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync('./football.csv', 'utf8')
    .split('\n')
    .map((row) => row.split(','));
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
;
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} matches.`);
