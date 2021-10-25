const readline = require('readline-sync');


function jogo() {
  const numeroFornecido = readline.questionInt('Fale um número de 1 a 10 ');
  const numeroAleatorio = (Math.random() * (10 - 1) + 1).toFixed(0);
  
  if (numeroFornecido == numeroAleatorio) return `Parabéns, número correto!`;
  return `Opa, não foi dessa vez. O número era ${numeroAleatorio}`
}

console.log(jogo());

const novamente = readline.question(
  'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
);

if (novamente !== 's') return console.log('OK, até a próxima!');
console.log(jogo());
