const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
module.exports = myRemove;

// // tava tentando transformar essa func acima em HOF, desisti no meio do caminho.
// const myRemove = (arr, item) => {

//   arr.reduce((newArray, item) => {
//     const item
//     if (newArray[0] !== item) newArray[0].push(item); 
//     return newArray;
//   }
//   , []);
// }
// console.log(myRemove([1, 2, 3, 4], 3));

