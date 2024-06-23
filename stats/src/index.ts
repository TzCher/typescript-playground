import { CSVFileReader } from "./CSVFileReader";

const reader = new CSVFileReader('football.csv');
reader.read();

enum matchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
};

let manUnitedWins = 0;


for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.AwayWin ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} matches.`);
