// Parte 2 exercçio 4
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//  Exemplo:
//      String determinada: "Tryber x aqui!"
//      Parâmetro: "Bebeto"
//      Retorno: "Tryber Bebeto aqui!"

const newString = (string, parametro) => {
    const newString = '';
    for (let index = 0; index <= string.length; index += 1) {
        let x = string[index].indexOf('x');
        if (x === 'x') {
            x = parametro;
            newString.push(x); 
        } else {
            newString.push(string[index]);
        }
    };
    return string;
}  
// console.log(newString("Tryber x aqui!", "Bebeto"));

//Eu tava tentando valer p qq string, n tava conseguindo fui ver o gabarito e ele fez p funcionar apenas p uma string, como abaixo

function newString2 (parametro1) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!`  
    )
    return (`${fun1(parametro1)}`);
}
// console.log(newString2('Bebeto'));

//  Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills . -> n tava entendendo q skills eram essa, copiei do gabarito tb.

const skills = ["Android", "iOS", "Architecture", "Teach", "Run"];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
//  Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
//      JavaScript;
//      HTML; ... #goTrybe".



function newString2 (parametro1) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!`  
    )
    return (`${fun1(parametro1)}`);
}
