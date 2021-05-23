//1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const object = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  console.log(`${nomeCompleto}, email: ${email}@trybe.com`);
}
// object('Marcela Silva');

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), 
    id2: callBack('Luiza Drumond'), 
    id2: callBack('Carla Paiva '),
	};
	return employees;
};
newEmployees(object);