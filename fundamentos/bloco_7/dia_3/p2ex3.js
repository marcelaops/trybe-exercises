//3.Escreva a função sumAllNumbers para passar nos testes já implementados.


const assert = require('assert');
const { on } = require('events');
const sumAllNumbers = (arrayNumbers) => {
    let sum = 0;
    for (const index in arrayNumbers) {
        sum += arrayNumbers[index];
    }
    return sum;
} 

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);