const exercise4 = require('./exercise4');
jest.mock('./exercise4');

test('mockando função uppercase para retorna string em caixa baixa', () => {
    exercise4.uppercase.mockImplementationOnce((string) => string.toLowerCase());

    expect(exercise4.uppercase('OI')).toBe('oi');
    expect(exercise4.uppercase).toHaveBeenCalled();
    expect(exercise4.uppercase).toHaveBeenCalledTimes(1);
    expect(exercise4.uppercase).toHaveBeenCalledWith('OI');

})

test('mockando função firstCharacter para retornar a última letra de uma string', () => {
    exercise4.firstCharacter.mockImplementationOnce((string) => string.charAt(string.length - 1));
    
    expect(exercise4.firstCharacter('Bom dia')).toBe('a');
    expect(exercise4.firstCharacter).toHaveBeenCalled();
    expect(exercise4.firstCharacter).toHaveBeenCalledTimes(1);
    expect(exercise4.firstCharacter).toHaveBeenCalledWith('Bom dia');
})

test('mockando a função concatString para retornar a concatenação de 3 strings', () => {
    exercise4.concatStrings.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));
    expect(exercise4.concatStrings('Oi,', ' Bom', ' dia')).toBe('Oi, Bom dia');
    expect(exercise4.concatStrings).toHaveBeenCalled();
    expect(exercise4.concatStrings).toHaveBeenCalledTimes(1);
    expect(exercise4.concatStrings).toHaveBeenCalledWith('Oi,', ' Bom', ' dia');
})
