// 2
const promise = new Promise((resolve, reject) => {
    const arrayNumber = [];
    for (let index = 0; index < 10; index += 1) {
        const number = Math.floor(Math.random() * 51);
        arrayNumber.push(number);
    }
    const square = arrayNumber.map((number) => number * number);
		console.log(square);
    const sumArray = square.reduce((acc, curr) => acc + curr);
    console.log(sumArray);
    if (sumArray > 8000) {
        return reject();
    }
    resolve();
});
promise
	.then(() => console.log('Promise resolvida'))
	.catch(() => console.log('Promise rejeitada'));



// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

// Eu tinha feito diferente, mas depois de ver os resursos adicionais e o gabarito percebi que era melhor colocar a promisse dentro de uma outra função, sendo que a array da sum dividivo pela array [2, 3, 5, 10] ainda está saindo [ NaN, NaN, NaN, NaN ] -> concertei na monitoria, eu estava esquecendo de retornar a sumArray na condição se caso desse resolve. -> resolve(sumArray)
const fetchPromise = () => {
	const promise = new Promise((resolve, reject) => {
		const arrayNumber = [];
		for (let index = 0; index < 10; index += 1) {
				const number = Math.floor(Math.random() * 51);
				arrayNumber.push(number);
		}
		const square = arrayNumber.map((number) => number * number);
		console.log(square);
		const sumArray = square.reduce((acc, curr) => acc + curr);
		console.log(sumArray);
		sumArray < 8000 ? resolve(sumArray) : reject()
	});

	promise
		.then(sumArray => console.log([2, 3, 5, 10].map(number => sumArray / number)))
		.catch(() => console.log('Promise rejeitada'));
};
fetchPromise()
	// .then(sumArray => console.log([2, 3, 5, 10].map(number => sumArray / number)))
	// .catch(() => console.log('Promise rejeitada'));
	// Pode ser colocado o then e a catch na hora de chamar a func como a linha 41 e 42. Assim teria q dar um return promise no final da func fetchPromise. 

// 4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
	.then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
	.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();

// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
	.then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
	.then(array => console.log(array.reduce((number, acc) => number + acc, 0)))
	.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};

fetchPromise();