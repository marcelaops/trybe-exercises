""" Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n). """

def sum_even_number(number):
    even_total = 0

    """ O +1 é p compensar o índice 0 """
    for num in range(1, number + 1):
        even_total += 1 if num % 2 == 0 else 0
  
    return even_total

# print(sum_ven_number(20))

""" Exercício 2: Transforme o algoritmo criado acima em recursivo. """
def recursive_sum(number):
    if number == 1:
      return 0
    elif number % 2 == 0:
      return 1 + recursive_sum(number - 1)
    else:
      return recursive_sum(number - 1)
print(recursive_sum(10))