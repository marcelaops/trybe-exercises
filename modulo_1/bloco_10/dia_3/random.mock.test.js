const { expect, test } = require('@jest/globals');
const { randomNumber } = require('./random');
const random = require('./random');

// 1.Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

test("teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  random.randomNumber = jest.fn().mockReturnValue(10);

  expect(random.randomNumber()).toBe(10);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
});

// 2.Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
test('testar o mock que faz uma nova implementação, onde recebe dois parâmetros e retorna a divisão do primeiro pelo segundo.', () => {
	const spyRandom = jest.spyOn(random, 'randomNumber');
	spyRandom.mockImplementationOnce((a, b) => a / b);
	
	expect(spyRandom(4, 2)).toBe(2);
	expect(spyRandom).toHaveBeenCalled();
	expect(spyRandom).toHaveBeenCalledTimes(2);  // se eu deixar apenas 1 ele dá erro,a cho q é pq eu utilizei a função aí  em cima, no 1º teste.
	expect(spyRandom).toHaveBeenCalledWith(4, 2);
})

// 3.Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
test('testar o mock que faz uma nova implementação, onde receba três parâmetros e retorne seu dobro. ', () => {
	const spyRandom = jest.spyOn(random, 'randomNumber');

	spyRandom.mockImplementation((a, b, c) => a * b * c);
	expect(spyRandom(4, 2, 2)).toBe(16);
	expect(spyRandom).toHaveBeenCalled();
	expect(spyRandom).toHaveBeenCalledTimes(3); // aqui botei 3 pelo motivo do aí de cima. 
	expect(spyRandom).toHaveBeenCalledWith(4, 2, 2);
 
	spyRandom.mockReset();
	expect(spyRandom).toHaveBeenCalledTimes(0);

	random.randomNumber = jest.fn().mockImplementation((numero) => numero * 2);

	expect(random.randomNumber(4)).toBe(8);
	expect(random.randomNumber).toHaveBeenCalled();
	expect(random.randomNumber).toHaveBeenCalledTimes(1);
	expect(random.randomNumber).toHaveBeenCalledWith(4);
})

// No gabarito está diferente, ele faz um test para cada, dividindo:

// const service = require('./service');

// describe("testando implementações", () => {
//   test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
//     service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

//     expect(service.randomNumber(2, 3, 4)).toBe(24);
//     expect(service.randomNumber).toHaveBeenCalled();
//     expect(service.randomNumber).toHaveBeenCalledTimes(1);
//     expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
//   });

//   test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
//     service.randomNumber.mockReset();
//     expect(service.randomNumber).toHaveBeenCalledTimes(0);

//     service.randomNumber.mockImplementation(a => a * 2);

//     expect(service.randomNumber(5)).toBe(10);
//     expect(service.randomNumber).toHaveBeenCalled();
//     expect(service.randomNumber).toHaveBeenCalledTimes(1);
//     expect(service.randomNumber).toHaveBeenCalledWith(5);
//   });
// });

