const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1.Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addToLesson2 = (object, turno, value) => object.turno = value;    //ou poderia ter feito object[turno] = value

addToLesson2(lesson2, 'turno', 'manhã');
console.log(lesson2); 

//2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2)); 

