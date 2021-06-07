// 2
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
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));


