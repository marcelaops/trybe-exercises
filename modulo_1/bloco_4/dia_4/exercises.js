//PARTE I - OBJETOS E FOR/IN
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    //Exercício 2
    recorrente: 'Sim'
  };
 
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
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    //Exercício 2
    recorrente: 'Sim'
} 

for (let key in info){
    if (info[key] === info.recorrente && info[key] === 'Sim' && info2[key] === 'Sim' ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}