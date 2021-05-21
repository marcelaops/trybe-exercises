//Parte I exercício 2

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


// primeiro checando se é uma função
assert.strictEqual(typeof myRemove, 'function');

//2.1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
//deepStricEqual p array e objetos

//2.2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//2.3. Verifique se o array passado por parâmetro não sofreu alterações
myRemove([4, 3, 2, 1], 3);
assert.deepStrictEqual(myRemove([4, 3, 2, 1], 3), [4, 2, 1]);

//2.4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
console.log(myRemove([1, 2, 3, 4], 5));
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);