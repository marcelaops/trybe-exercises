// 6.Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.
// const fetch = require('node-fetch');

const fetchURL = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()
        .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)));
};

describe('testando requisição', () => {
    const apiURL = jest.spyOn({ fetchURL : fetchURL}, 'fetchURL');
    afterEach(apiURL.mockReset);

    it('testando requisição caso a promise resolva', () => {
        apiURL.mockResolvedValue('request sucess');

        apiURL();
        expect(apiURL).toHaveBeenCalled();
        expect(apiURL).toHaveBeenCalledTimes(1);
        expect(apiURL()).resolves.toBe('request sucess');
        expect(apiURL).toHaveBeenCalledTimes(2);
    });


    it('testando requisição caso a promise seja rejeitada', () => {
        apiURL.mockRejectedValue('request failed');

        expect(apiURL).toHaveBeenCalledTimes(0);
        expect(apiURL()).rejects.toMatch('request failed');
        expect(apiURL).toHaveBeenCalledTimes(1);
    });
})
