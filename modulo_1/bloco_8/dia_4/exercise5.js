// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  // raciocínio aqui estava errado, eu li rápido e achei q fossem palavras q começassem com a letra a -> concertasr
  return names.reduce((result, name) => {
    if (name.startsWith('A') || name.startsWith('a')) {
      result += 1;
    }  
}); 
};
console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);