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

//Exercício 3
for (let key in info) {
    console.log(key);
}