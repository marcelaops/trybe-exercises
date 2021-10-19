
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso (em kg)? ');
const altura = readline.questionFloat('Qual sua altura (em metros)? ');

const IMC = (peso / Math.pow(altura, 2)).toFixed(2);

function classificaSituacao() {
  if (IMC < 18.5) return `Seu IMC é de ${IMC} e sua situacao é Abaixo do peso (magreza)`; 
  if (IMC >= 18.5 && IMC <= 24.9 ) return `Seu IMC é de ${IMC} e sua situacao é Peso normal`;
  if (IMC >= 25 && IMC <= 29.9) return `Seu IMC é de ${IMC} e sua situacao é Acima do peso (sobrepeso)`;
  if (IMC >= 30 && IMC <= 34.9 ) return `Seu IMC é de ${IMC} e sua situacao é Obesidade grau I`;
  if (IMC >= 35 && IMC <= 39.9 ) return `Seu IMC é de ${IMC} e sua situacao é Obesidade grau II`;
  if (IMC >= 40) return `Seu IMC é de ${IMC} e sua situacao é Obesidade graus III e IV`;
};

console.log(classificaSituacao());

