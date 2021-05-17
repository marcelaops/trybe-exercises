//PARTE 1 EXERCÍCIO 2

const oddsAndEvens = () => {
    const numbers = [13, 3, 4, 10, 7, 2];
    const numbersInOrder = numbers.sort((a, b) => a - b);  
    
    //Sort numbers in ascending order source: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a 
    //Se n usar esse método a função sort n lê os números como array. Por exemplo, se usarmos só const numberInOrder = numbers.sort() o resultado seria  [10, 13, 2, 3, 4, 7], pois ele lê o primeiro número de 10, q é menor do q 3. 
    
    console.log(`Os números ${numbersInOrder} se encontram ordenados de forma crescente!`);
}

oddsAndEvens();