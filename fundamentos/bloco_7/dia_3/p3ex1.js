//1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');
const greetPeople = (people) => {
    let result = [];

    for (const person in people) {
      let greeting = `Hello ${people[person]}`;
      result.push(greeting);
    }
    return result;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.strictEqual(typeof greetPeople, 'function');
  assert.deepStrictEqual(greetPeople(parameter), result);