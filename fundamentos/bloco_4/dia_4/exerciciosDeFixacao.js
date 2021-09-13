//OBJETOS
//Exercíio 1
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
//      //Exercício 3
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]

// };

// // console.table(player);

// //Exercícios 2
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// //Exercício 4
// let quantasVezesMelhorDoMundo = player.bestInTheWorld.length;
// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + quantasVezesMelhorDoMundo + ' vezes');

// //Exercício 5 
// console.log('A jogadora possui ' + player.medals.golden +' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

//FOR/IN

// Exercício 1
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };
// for (let key in names) {
//     console.log('Olá ' + names[key]);
// }

// //Exercício 2
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };
// for (let key in car) {
//     console.log(key + ': ' +car[key]);
// }

//FUNÇÕES
//// Adição
function adicao (param1, param2){
    return param1 + param2;
}
console.log(adicao(5, 2));

// Função Perimetro
function area (base, altura){
    return ((base * altura) / 2);
}
console.log(area(4,2));
