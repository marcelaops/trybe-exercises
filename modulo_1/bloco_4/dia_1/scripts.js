//Parte II - Variáveis
const name = "Carolina";
const birthCity = "Rio de Janeiro";
let birthYear = 1987;
birthYear = 2030;
birthCity = 'São Paulo';

console.log(name);
console.log(birthCity);
console.log(birthYear);


//Parte III  - Tipos Primitivos, Tipagem Dinâmica 
//e Operações Aritiméticas
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)
console.log(typeof patientAge) 
//aparece como undefined, pois n declaramos essa variável.


let base = 5;
let altura = 8;

let area = (base*altura);
console.log(area);

let perimetro = 2*base+2*altura;
console.log(perimetro);

// Parte IV - Condições if e else
let a = 30;

if(a>=1 && a<=100){
  console.log (a);
}
else{
  console.log(0);
}

//n sei se soube fazer o numero 1 dos sugeridos ai em cima.


let nota=70;
if (nota>=80){
  console.log("Parabéns, você foi aprovada(o)!");
}
else if(nota<80 && nota>=60){
  console.log("Você está na nossa lista de espera");
}
else{
  console.log("Você foi reprovada(o)");
}

//Parte V  - Switch e Case
let  estado = 'aprovado';
switch(estado){
  case 'aprovado':
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case 'lista':
    console.log("Você está na nossa lista de espera");
    break;
  case 'reprovada':
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log('não se aplica');
}