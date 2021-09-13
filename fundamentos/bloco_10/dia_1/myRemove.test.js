// Parte I Exercício 2
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// 1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 3.Verifique se o array passado por parâmetro não sofreu alterações
// 4.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// implemente seus testes aqui

const myRemove = require('./myRemove');

describe('Parte I Exercício 2 - função myRemove(arr, item)', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verifique se o array passado por parâmetro não sofreu alterações', () => { 
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});    