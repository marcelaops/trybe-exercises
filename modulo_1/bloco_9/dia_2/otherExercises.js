// 2
// const promise = new Promise((resolve, reject) => {
//     const arrayNumber = [];
//     for (let index = 0; index < 9; index += 1) {
//         const number = Math.floor(Math.random() * 51);
//         arrayNumber.push(number);
//     }
//     const square = arrayNumber.map((number) => number * number);
//     const sumArray = square.reduce((acc, curr) => acc + curr);
//     console.log(sumArray);
//     if (sumArray > 8000) { 
//         return reject();
//     }
//     resolve();  
// })
// .then(() => console.log('Promise resolvida'))
// .catch(() => console.log('Promise rejeitada'));

// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
const promise = new Promise((resolve, reject) => {
    const arrayNumber = [];
    for (let index = 0; index < 9; index += 1) {
        const number = Math.floor(Math.random() * 51);
        arrayNumber.push(number);
    }
    const square = arrayNumber.map((number) => number * number);
    const sumArray = square.reduce((acc, curr) => acc + curr);
    console.log(sumArray);
    if (sumArray > 8000) { 
        return reject();
    }
    resolve();  
})
.then(sumArray => [2, 3, 5, 10].map(number => console.log(sumArray / number)))
.catch(() => console.log('Promise rejeitada'));


