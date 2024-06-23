import fs from 'fs';

const matches = fs
  .readFileSync('./football.csv', 'utf8')
  .split('\n')
  .map((row: string): string[] => row.split(','));

const homeWin = 'H';
const awayWin = 'A';
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} matches.`);
