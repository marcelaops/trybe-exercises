// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acumulador, elemento) => acumulador.concat(elemento));
  // o método concat eu vi no gabarito -> https://www.w3schools.com/jsref/jsref_concat_array.asp#:~:text=The%20concat()%20method%20is,values%20of%20the%20joined%20arrays.
  // sendo q no gabarito foi colocado o índice vazio dentro do reduce: return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
// console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);  