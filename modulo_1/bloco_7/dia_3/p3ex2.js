//2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let contador = 0;
    for (let index = 0; index < characters.length; index += 1) {
      if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
      ) {
        contador += 1;
        results.push(contador);
      } else {
        results.push(characters[index]);
      }
    }
    return results.join('');  // método join() source https://www.w3schools.com/jsref/jsref_join.asp
};
console.log(removeVowels('Dayane'));  
  
const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.deepStrictEqual(removeVowels(parameter), result);