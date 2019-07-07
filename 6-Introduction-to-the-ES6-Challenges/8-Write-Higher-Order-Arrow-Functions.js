const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = arr => {
    'use strict';
    // change code below this line
    const squaredIntegers = arr.filter(num => Number.isInteger(num)).map(square => square * square);
    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
