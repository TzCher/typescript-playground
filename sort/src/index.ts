import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');

const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numSorter.collection);

const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection);

