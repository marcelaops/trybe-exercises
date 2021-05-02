//PARTE I - OBJETOS E FOR/IN
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     //Exercício 2
//     recorrente: 'Sim'
//   };
 
//Exercício 1
// console.log('Bem vinda, ' + info.personagem);

//Exercício 2
// console.log(info);
//ou colocar aqui em baixo info.reccorente = 'Sim'; ou info['recorrente'] = 'Sim';

//Exercício 3
// for (let key in info) {
//     console.log(key);
// }

//Exercício 4
// for (let key in info) {
//     console.log (info[key]);
// }

//Exercícios 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
    //Exercício 2
//     recorrente: 'Sim'
// } 

// for (let key in info){
//     if (info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim' ) {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[key] + ' e ' + info2[key]);
//     }
// }

//PARTE II - FUNÇÕES
//EXERCÍCIOS 1
function verificaPalindromo (string) {
let letras = string.split('');
let palindromo = true;

    for (let index in letras){
        if (letras[index] != string[(string.length - 1) - index]){
        palindromo = false;
    } 
    }
    return palindromo;
}
// console.log(verificaPalindromo('arara'));

//Exercício 2
function maiorValor (arrayInteiros){
    let indiceDeMaiorValor = 0;

    for (let index in arrayInteiros){
        if (arrayInteiros[index] > arrayInteiros[indiceDeMaiorValor]) {
            indiceDeMaiorValor = index;
        }    
    }
    return indiceDeMaiorValor;
}
// console.log (maiorValor([2, 3, 6, 7, 10, 1]))

//Exercício 3
function menorValor (arrayInteiros) {
    let indiceDeMenorValor = 0;

    for (let index in arrayInteiros){
        if (arrayInteiros[index] < arrayInteiros[indiceDeMenorValor]) {
            indiceDeMenorValor = index;
        }    
    }
    return indiceDeMenorValor;
}
// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//Exercício 4
function maiorQuantCaracteres (array) {
    let maiorNome = '';

    for (let index in array){
        if (array[index].length > maiorNome.length){
            maiorNome = array[index]; 
        }
    }

    return maiorNome; 
}
// console.log (maiorQuantCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Marcela']));

//Ecercício 5
function quantDeVezesInteiros (array) {
let contRepti = 0;
let contador = 0;
let indexNumeRepe = 0;

    for (let index in array) {
        let verificaNum = array[index];
        for (let index2 in array){
            if (verificaNum === array[index2]){
                contador += 1;
            }
        } 
        if (contador > contRepti) {
            contRepti = contador; 
            indexNumeRepe = index;
        }
        contador = 0;
    } 
    return array[indexNumeRepe];
}
// console.log(quantDeVezesInteiros([2, 3, 2, 5, 8, 2, 3]));

//Exercícios 6
function somatorio (inteiroN){
let soma = 0;
    for (let index = 1; index <= inteiroN; index += 1){
        soma += index;
    }
    return soma;
}
console.log (somatorio(5));