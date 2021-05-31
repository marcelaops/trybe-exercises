// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja: Dica: use parâmetro rest .

const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0); 

// eu tinha colocado a segunda arrow function, a numbers.reduce entre chaves e deu erro, n entendi.

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);