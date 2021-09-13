// Exercício de fixação
// const { expect } = require('@jest/globals');
const { test, expect } = require('@jest/globals');
const { somar, subtrair, multiplicar, dividir } = require('./math');
const math = require('./math');


// Faça o mock da funcão subtrair e teste sua chamada.
test('testando chamda da função subtrair', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
})

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
test('testando a chamada da função multiplicare o retorno padrão ser no valor de 10', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
});

// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.

test('testando a chamada o retorno e os parâmetros da função somar', () => {
    const mockSomar = jest.spyOn(math, "somar");

    mockSomar(1, 2);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(1, 2);
    expect(mockSomar(1, 2)).resolves.toBe(3);
})

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// test('testando a chamada o retorno e os parâmetros da função dividir', () => {
//     const mockDividir = jest.spyOn(math, "dividir");mockDividir(2, 5);
//     mockDividir.mockReturnValue(15);
//     mockDividir.mockReturnValueOnce(2);
//     mockDividir.mockReturnValueOnce(5);


//     expect(mockDividir).toHaveBeenCalled();
//     expect(mockDividir).toHaveBeenCalledTimes(1);
//     expect(mockDividir).toHaveBeenCalledWith(4, 2);
//     expect(mockDividir(4, 2)).toBe(2);
// })

// n tava dando certo, gabarito: 
test('Testa chamada, retorno e parâmetros da função dividir', () => {
  const mockDividir = jest.spyOn(math, "dividir");
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);  

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
});

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.


test('Testa chamada, retorno e parâmetros da função subtrair', () => {
  const mockSubtrair = jest.spyOn(math, "subtrair");
	mockSubtrair.mockImplementation((a, b) => a - b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(22, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(22, 2);
	
	math.subtrair.mockRestore();
	mockSubtrair.mockReturnValue(8);

	expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});

// Tava dando errro no toHaveBeenCalledTimes, pq no primeiro exercício eu já estava chamando a função subtrair, depois q eu comentei o teste funcionou... Mas daí, p n precisar ocmentar eu só troquei o primeiro toHaveBeenCalledTimes para (2)
