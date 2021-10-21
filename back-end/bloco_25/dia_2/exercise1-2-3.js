// Exercício 1
function equation(parm1,parm2, parm3) {
  const promise = new Promise((resolve, reject) => {
    if (typeof parm1 !== 'number' || typeof parm2 !== 'number' || typeof parm3 !== 'number') reject("Informe apenas números");

    const resultado = (parm1 + parm2) * parm3;

    if (resultado < 50) reject("Valor muito baixo");
    resolve(resultado);
    // console.log(resultado);
  });

  return promise;
}

// equation(1,2,3)
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

// equation(10,20,30)
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

// equation("a",2,3)
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject))

// Exercício 2
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function equantionWithRandomNumbers() {
  // let params = [];
  // for (let i = 0; i <= 2; i ++) {
  //   const randomNumber = Math.floor(Math.random() * 100 + 1);
  //   params.push(randomNumber);
  // }

  const parm1 = randomNumber();
  const parm2 = randomNumber(); 
  const parm3 = randomNumber();
  
  equation(parm1, parm2, parm3)
    .then(resolve => console.log(resolve))
    .catch(reject => console.error(reject.message))
}

// equantionWithRandomNumbers();

// Exercício 3 - com async/await
async function equantionWithRandomNumbers() {
  const parm1 = randomNumber();
  const parm2 = randomNumber(); 
  const parm3 = randomNumber();
  
  try {
    const resultado = await equation(parm1, parm2, parm3);
    console.log(resultado);
  } catch (err) {
    console.error(err);
  }  
}

equantionWithRandomNumbers();
