//Exercíio 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
     //Exercício 3
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]

};

// console.table(player);

//Exercícios 2
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//Exercício 4
let quantasVezesMelhorDoMundo = player.bestInTheWorld.length;
console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + quantasVezesMelhorDoMundo + ' vezes');

//Exercício 5 
console.log('A jogadora possui ' + player.medals.golden +' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

