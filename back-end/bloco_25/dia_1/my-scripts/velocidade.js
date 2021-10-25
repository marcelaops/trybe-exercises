const readline = require('readline-sync');

const distancia = readline.questionInt('Qual distância (em metros) o carro percorreu? ');
const tempo = readline.questionInt('Em quanto tempo (em segundos) ele percorreu a distância?');

const velocidadeMedia = distancia / tempo;

console.log(`A velocidade média do seu carro é ${velocidadeMedia}m/s.`);