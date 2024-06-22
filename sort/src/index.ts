import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const numSorter = new Sorter(numbersCollection);
numSorter.sort();
console.log(numSorter.collection);

const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
