""" Exercício 1 Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"] , após duas iterações utilizando bubble sort , como estaria este array? """

#  Tirei do conte;udo do course a função bubble_sort
def bubble_sort(array):
    # variável utilizado na iteração
    # para marcar se houve ou não trocas naquela iteração
    # Quando falsa, indica que o array está ordenado
    has_swapped = True

    # armazena o número de iterações para evitar
    # a iteração sobre índices já ordenados
    num_of_iterations = 0

    # Enquanto ainda não está ordenado (ocorreram trocas na iteração)
    while has_swapped:
        has_swapped = False

        # percorra o array até o ultimo índice não ordenado
        for i in range(len(array) - num_of_iterations - 1):
            # caso a posição corrente seja maior que a posterior
            if array[i] > array[i + 1]:
                # realiza a troca entre as posições
                array[i], array[i + 1] = array[i + 1], array[i]
                # marca que tivemos trocas nesta iteração
                has_swapped = True
        num_of_iterations += 1

    return array


print(bubble_sort(["zebra", "macaco", "elefante", "arara", "javali"])) 
""" Retorna: ['arara', 'elefante', 'javali', 'macaco', 'zebra'] """
#  Depois de 2 iterações ficaria assim: [ "macaco", "arara", "elefante", "zebra" , "javali"] -> errado. O certo é : ["elefante", "arara", "javali" ,"macaco","zebra"]