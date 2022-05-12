""" Exercício 1 - Faça uma função que retorne o enésimo número da sequência de Fibonacci.  """

def my_fibonacci(nth): # Errado
    sequencie = []
    number = 0

    while len(sequencie) <= nth:
      number = sequencie[-1] + sequencie[-2]
      sequencie.append(number)
    
    return sequencie

# my_fibonacci(2)

# Solução 1 | Iterativa
def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]

# print(fibonacci_iter(5))

# Solução 2 | Recursiva
def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
        # Função chamdno ela mesma 

# print(fibonacci(5))



""" Exercício 2 - Faça uma função que recebe uma lista, e retorna-a na ordem reversa. """

# Minha Solução
def reverse(list):
    return [num for num in reversed(list)]

# print(reverse([0,1,2]))

#  Solução 2 | recursiva
def reverse2(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]

# print(reverse2([0,1,2,3,4,5]))


""" Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele. 
Exemplo:
  Número passado por parâmetro à função: 4

  Execução: 4 + 3 + 2 + 1

  Resultado: 10"""

#  Minha Solução
def sum(number):
    if number == 0:
      return 0
    else:
      return number + sum(number - 1) 
print(sum(4))

# Solução Recur

