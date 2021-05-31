// 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo: Dica: use object destructuring.
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = (person) => `${person.name} is ${person.age} years old and likes ${person.likes.join(', ')}.`;

// Do jeito q fiz acima está deu certo. Ao ver o gabarito percebi que abordei de maneira errada o object destructuring. Eu chamei as chaves do objeto dentro da função, ao invés de atribuir as chaves como parâmetro da função. O gabarito:
const personLikes = ({ name, age, likes }) => ( `${name} is ${age} years old and likes ${likes.join(', ')}.`);
console.log(personLikes(alex));



assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');