// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const assert = require('assert');

// escreva greet abaixo
const greet = (name, greeting) => typeof greeting === 'undefined' ? (`Hi ${name}`) : `${greeting} ${name}` ;

// uma maneira mais concisa (gabarito):
const greet = (name, msg = 'Hi') => `${msg} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));


assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');