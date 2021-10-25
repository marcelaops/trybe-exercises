const readline = require('readline-sync');

function calculoFatorial () {
  const numero = readline.questionInt('Diga um número inteiro maior que 0 ');
  const fatorial = (n) => (n < 2) ? 1 : fatorial(n - 1) * n;

  const calculo = () => {
    if (numero <= 0 ) return 'Por favor, digite um número inteiro maior que 0.';
    else return `O fatorial de ${numero} é ${fatorial(numero)}`
  } 

  return console.log(calculo());
}

calculoFatorial();


// Gabarito:
function realizaFatoracao(x) {
  // Se x for 0 ou 1
  return [0, 1].includes(x)
    // Retornamos 1
    ? 1
    // Caso contrário, continuamos o cálculo do fatorial multiplicando x pelo fatorial de x - 1
    : x * realizaFatoracao(x - 1); // Uma função que chama a si mesma é chamada de função **recursiva**
}

function realizaCalculo() {
  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

realizaCalculo();