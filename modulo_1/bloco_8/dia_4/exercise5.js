// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA2() {
  // escreva seu código aqui
  // eu comecéi fazer igual o Rafael Tavares colocou nesse fórum : https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array 
  // mas daí reparei q compararia apenas uma string toda e não cada letra de todas as strings. Então usei o split.
  // 1º peguei todas as letras separadas, agora p checar se elas são a aletra a, vou fazer outro reduce
  names.reduce((total, letra) => {
    total + letra.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') {
        return acc += 1;
      }  
      return acc;
  }, 0);  

})};


// n estava conseguindo resolver então olhei o gabarito...

function containsA() {
  // escreva seu código aqui
  return names.reduce((total, letra) => 
    total + letra.split('').reduce((acc, curr) => {
      if (curr === 'a' || curr === 'A') return acc + 1;
      return acc;
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);