// Refatore a Promise para utilizar somente async e await .
const sum = () => {
    const arrayNumber = [];
	for (let index = 0; index < 10; index += 1) {
		const number = Math.floor(Math.random() * 51);
		arrayNumber.push(number);
	}
	const square = arrayNumber.map((number) => number * number);
	// console.log(square);
	const sumArray = square.reduce((acc, curr) => acc + curr);
	console.log(sumArray);
	if (sumArray < 8000) { return sum }
    throw new Error();
}
const sumArrays = (sum) => [2, 3, 5, 10].map(number => sumArrays / number). reduce((number, acc) => number + acc, 0);


const fetchPromise = async () => {
	try {
        const sum = await sum();
        const sumElementsArray = await sumArrays(sum);
    } catch (error) {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
};
fetchPromise();
// algo tá dando errado

// Gabarito:
const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();