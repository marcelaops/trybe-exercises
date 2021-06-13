// Parte II Exercício 3 
// A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

const hydrate = (string) => {
    const arrayString = string.split('');
    arrayString.reduce((acc, curr) => {
        
    }, '')
};
console.log(hydrate('1 cerveja'))

module.exports = hydrate;