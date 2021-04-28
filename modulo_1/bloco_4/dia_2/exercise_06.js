let numbers = [5, 9, 3, 19, 70, 8, 100, 1, 35, 27];
let quantityOfOddNumber = 0;

for (let index = 0; index < numbers.length; index += 1) {
   if(numbers[index] % 2 !== 0){
       quantityOfOddNumber += 1;
   }
};

if (quantityOfOddNumber === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(quantityOfOddNumber);
}




