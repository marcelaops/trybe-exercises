const { expect } = require("@jest/globals");

const getRepos = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name);
  });
};

// 4 - O código acima busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');
test('Test para ver se o repositórios se encontram na lista', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(2);
    return getRepos(url).then(repo => {
        console.log(repo);
        expect(repo).toContain('sd-01-week4-5-project-todo-list');
        expect(repo).toContain('sd-01-week4-5-project-meme-generator');
    });
});

// era p estar certo, por causa da similariedade com o gabarito, mas falando que fetch is not definned. :|