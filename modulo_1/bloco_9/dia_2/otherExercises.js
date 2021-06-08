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

// Eu tinha feito da diferente, mas depois de ver os resursos adicionais e o gabarito percebi que era melhor colocar a promisse dentro de uma outra função para conseguir, sendo que a array da suma dividivo pela array [2, 3, 5, 10] ainda está saindo [ NaN, NaN, NaN, NaN ]
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
		if (sumArray > 8000) {
				return reject();
		}
		resolve();
	});

	promise
		.then(sumArray => console.log([2, 3, 5, 10].map(number => sumArray / number)))
		.catch(() => console.log('Promise rejeitada'));
};
fetchPromise();

// No gabarito:
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
    .catch(() => console.log('Promise rejeitada'));
	
};

fetchPromise();

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