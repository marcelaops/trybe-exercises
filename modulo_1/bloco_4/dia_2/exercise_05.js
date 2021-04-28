let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (highestValue < numbers[index]){
        highestValue = numbers[index];
    }
};

console.log('o maior valor da array é ' + highestValue);
