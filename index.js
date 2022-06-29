// function sort(elt) {
//     console.log(elt.sort());
// }

// module.exports = function


const { arrayNumbers, arrayCars } = require('./data')
const { sortArrays } = require('./all')


arrayNumbers.sort();
console.log(arrayNumbers);
// const sortedNums = sortArrays(arrayNumbers)
// console.log(sortedNums);
// console.log(arrayNumbers);


arrayCars.sort();
console.log(arrayCars);
//const sortCars = sortArrays(arrayCars)
// console.log(sortedCars);
//console.log(arrayCars);

