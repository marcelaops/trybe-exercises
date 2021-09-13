// PARTE I Exercício 1

//função original: 
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// Trocando var  ifScope por let, pois a variável vai ser reatribuida depois. E trocando var elseScope por const. 
//Também udando p arrow function

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//         const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
// }
// testingScope(false);

// modificando concatenações p template literals
const testingScope = (escopo) => {
        if (escopo === true) {
          const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
        } else {
            const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(`${elseScope}`);
        }
}
testingScope(true);

