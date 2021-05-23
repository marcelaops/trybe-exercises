//4. Escreva a função findTheNeedle para passar nos testes já implementados.

const assert = require('assert');
const findTheNeedle = (arrayOfWords, word) => {
    let position = -1;
    for (const index in arrayOfWords) {
        if (arrayOfWords[index] === word) { 
            position = Number(index); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
        } 
    } 
    return position;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);