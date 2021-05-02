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
console.log (maiorValor([2, 3, 6, 7, 10, 1]))