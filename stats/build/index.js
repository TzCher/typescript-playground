"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const reader = new CSVFileReader_1.CSVFileReader('football.csv');
reader.read();
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
;
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} matches.`);
