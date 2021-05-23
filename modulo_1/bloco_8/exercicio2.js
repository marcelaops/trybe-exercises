// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: ç ou "Parabéns você ganhouz").
const numberCheck = (number, myNumber) => number === myNumber;

const raffle = (myNumber, callBack) => {
	const random = Math.round(Math.random() * 5 + 1);
	console.log(random);
 // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	if(callBack(myNumber, random) === true) {
		return ("Parabéns você ganhou");
	} else {
		return ("Tente novamente");
	}
}

console.log(raffle(1, numberCheck));

