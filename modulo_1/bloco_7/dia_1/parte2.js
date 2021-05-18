//Exercício 1 - Crie uma função que receba um número e retorne seu fatorial.

// const funcaoFatorial = numero => {    //prestando atenção q n usei os parênteses no parâmetro 'número' pq só tem um parâmetro.
//     if (numero >= 0){
//         let fatorial = 1;
//         for (let index = 1; index <= numero; index += 1) {
//             fatorial = fatorial * [index];
//         }
//         console.log(fatorial);
//     } else {
//         console.log('Por favor, entre com um número positivo');
//     }
// }
// funcaoFatorial(6);

// Acima, eu chequei primeiro se era um número positivo. Depois, como eu não começei de forma descrescente, e sim crescente, eu já declarei o fatorial = 1 pois eu sei q o último número multiplicador no fatorial seria o 1. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//E dentro dor for eu comecei com o index = 1 pois ele vai até ser menor e igual ao número.

//Agora de forma recursiva, ou seja, com ternary operator
const funcaoFatorial2 = numero => numero >= 1 ? numero * funcaoFatorial2(numero - 1) : 1;
console.log(funcaoFatorial2(6)); 

//Esse eu olhei no gabarito. Não sabia q vc poderia chamar a própria função dentro dela mesma. 
//Explicando a ideia aí em cima: a funcao recebe um numero, se caso ele for maior ou igual á 1, ele e multiplicado com o resultado da funcao q recebe como parâmetro ele -1. Assim ele vai num looping multiplicando todos até chagr no 1 dai para e segue p o console.log.
//Eu tenti debigar mas n consegui.
