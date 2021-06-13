// Compare dois objetos para verificar se são idênticos ou não
const obj1 = require('./twoObjects');
const { title } = require('./twoObjects');
const obj2 = require('./twoObjects');
const obj3 = require('./twoObjects');


describe('Compare dois objetos para verificar se são idênticos ou não', () => {
    it('Comparando obj1 com o obj2', () => {
        expect(obj1).toEqual(obj2);
    });

    it('Comparando obj1 com obj3', () => {
        expect(obj1).not.toEqual(obj3);
    });
});

// não estou conseguindo testar que 2 objetos são diferentes.
