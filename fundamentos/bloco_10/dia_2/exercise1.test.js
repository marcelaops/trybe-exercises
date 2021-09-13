// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const { test, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testando callback retorna "OI" da string "oi"', done => {
    uppercase('oi', str => {
        expect(str).toBe('OI');
        done();
    });
});