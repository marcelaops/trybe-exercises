
// 4.1
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parce(content);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((characters) => {
    characters.forEach((character) => console.log(character));
  });

//4.2 
// const fs = require('fs').promises;

// async function getById(id) {
//   const 
// } 