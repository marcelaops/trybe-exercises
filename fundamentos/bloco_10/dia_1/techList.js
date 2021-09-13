// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

const techList = (array, name) => {
	if (array.length === 0) return 'Vazio!';
  array.sort();
	return array.map((element) => { 
			return (newArray = {
				tech: element, 
				name: name,
			})
	});
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;