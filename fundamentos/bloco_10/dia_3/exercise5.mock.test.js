// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const exercise4 = require('./exercise4');
// jest.mock('./exercise4');

// describe('Implementrum mock na função uppercase e restaurar a implementação original e testar', () => {
//     it('mockando função uppercase para retorna string em caixa baixa', () => {
//         exercise4.uppercase.mockImplementationOnce((string) => string.toLowerCase());
    
//         expect(exercise4.uppercase('OI')).toBe('oi');
//         expect(exercise4.uppercase).toHaveBeenCalled();
//         expect(exercise4.uppercase).toHaveBeenCalledTimes(1);
//         expect(exercise4.uppercase).toHaveBeenCalledWith('OI');

//         exercise4.uppercase.mockRestore();
//         expect(exercise4.uppercase('oi')).toBe('OI');
//     });
// })

// não estava passando e eu acho que é pq usei o mockImplemetation sem usar o spyOn, no gabarito está assim com auterações p se encaixar:
describe("testando implementações", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      const first = jest
        .spyOn(exercise4, "uppercase")
        .mockImplementation(a => a.toLowerCase());
  
      expect(first("UPPERCASE")).toBe("uppercase");
      expect(first).toHaveBeenCalled();
      expect(first).toHaveBeenCalledTimes(1);
      expect(first).toHaveBeenCalledWith("UPPERCASE");
  
      exercise4.uppercase.mockRestore();
  
      expect(exercise4.uppercase("lowercase")).toBe("LOWERCASE");
    });
  });