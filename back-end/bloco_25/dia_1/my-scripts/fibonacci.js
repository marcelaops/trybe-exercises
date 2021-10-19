const readline = require('readline-sync');

function fibonacci (x) {
  let numerofib = 
    x < 1 ? 0
    : x <= 2 ? 1
    : fibonacci(x - 1) + fibonacci(x - 2);
  console.log(numerofib)
  return numerofib;
}

// console.log(fibonacci(4));

function realizacaoFibonacci () {
  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);
  fibonacci(x);
}

realizacaoFibonacci();

