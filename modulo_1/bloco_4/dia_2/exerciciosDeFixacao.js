// Exercícios de fixação de Arrays
// Exercício 1 - Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2 - Procure o índice do valor "Portfólio" do array menu :
let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

//Exercício 3 - Adicione o valor "Contato" no final do array menu :
menu.push('Contato');

console.log(menu);


// Exercícios de fixação de Fors
// Exercício 1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index+=1)
{
    console.log(groceryList[index]);
}

// Exercícios de fixação de For of
// Exercício 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name);
}