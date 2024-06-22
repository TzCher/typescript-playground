"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                if (typeof this.collection === 'string') {
                    const strArr = this.collection.split('');
                    if (strArr[j] > strArr[j + 1]) {
                        const temp = strArr[j];
                        strArr[j] = strArr[j + 1];
                        strArr[j + 1] = temp;
                    }
                    this.collection = strArr.join('');
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
const stringSorter = new Sorter('Xaayb');
stringSorter.sort();
console.log(stringSorter.collection);
