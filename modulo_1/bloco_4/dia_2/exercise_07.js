let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (lowerValue > numbers[index]){
        lowerValue = numbers[index];
    }
};

console.log('o menor valor da array é ' + lowerValue);