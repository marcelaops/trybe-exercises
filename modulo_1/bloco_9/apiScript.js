// Esse exercício ele foi fazendo passo á passo e eu fui trocando o corpo do código conforme o enunciado ia acrescentndo coisas. 

// eu tava fazendo assim, uma func appendJoke separado, mas como fiquei perdida e fui olhar o gabarito, vi que ele estava fazendo dentro do fetch mesmo, copiei o q tinha no corpo dessa func no fetch e deu certo. Mas ficou muito mais extenso do q no gabarito.

// const appendJoke = (joke) => {
//     const jokeContainer = document.querySelector('#jokeContainer');
//     const p = document.createElement('p');
//     p.innerHTML = data.joke;
//     jokeContainer.appendChild(p);
// };

// apiScript.js  


const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const jokeContainer = document.querySelector('#jokeContainer');
        const p = document.createElement('p');
        p.innerHTML = data.joke;
        jokeContainer.appendChild(p);
    });
};

window.onload = () => fetchJoke();