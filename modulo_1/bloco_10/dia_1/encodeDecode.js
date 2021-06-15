const assert = require('assert');

// Essas são as funções que eu desenvolvi no projeto playground, não cheguei á refatorar ainda. 
function encode(stringParam) {
    let stringCodificada = '';
    let consoante= '';
  
    for (let index = 0; index < stringParam.length; index += 1) {
      if (stringParam[index] === 'a'){
        stringCodificada += '1';
      } else if (stringParam[index] === 'e') {
        stringCodificada += '2';
      } else if (stringParam[index] === 'i') {
        stringCodificada += '3';
      } else if (stringParam[index] === 'o') {
        stringCodificada += '4';
      } else if (stringParam[index] === 'u') {
        stringCodificada += '5';
      } else {
        consoante = stringParam[index];
        stringCodificada += consoante;
      }
    }
    return stringCodificada; 
  }
  console.log(encode('bcdfghjklmnpqrstvxzwy'));

  function decode(stringParam2) {
    let stringCodificada2 = '';
    let consoante2 = '';
  
    for (let index = 0; index < stringParam2.length; index += 1) {
      if (stringParam2[index] === '1'){
        stringCodificada2 += 'a';
      } else if (stringParam2[index] === '2') {
        stringCodificada2 += 'e';
      } else if (stringParam2[index] === '3') {
        stringCodificada2 += 'i';
      } else if (stringParam2[index] === '4') {
        stringCodificada2 += 'o';
      } else if (stringParam2[index] === '5') {
        stringCodificada2 += 'u';
      } else {
        consoante2 = stringParam2[index];
        stringCodificada2 += consoante2;
      }
    };
    return stringCodificada2; 
  }

module.exports = { encode, decode };  

// Refatoração do gabarito

// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = splitString.map((character) => {
    if(objectMap[character]) {
      console.log(character);
      // console.log(objectMap[character]);
      return objectMap[character];
    }
    console.log(character);
    return character;
  });
  // console.log(mappedArray.join(''));
  return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
function decode(string) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

encode('ana');
// const functions = { encode, decode };
// module.exports = functions;