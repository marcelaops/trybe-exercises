-- To fix
-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
select * from actor;
select * from staff;

select first_name, last_name from actor
union all
select first_name, last_name from staff;

-- 2.Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
select first_name from customer where first_name like '%tracy%'
union
select first_name from actor where first_name like '%je%';

-- 3.Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.alter
(select first_name from actor order by first_name desc limit 5)
union all 
(select first_name from staff order by first_name limit 1)
union all
(select first_name from customer limit 5 offset 15)
order by first_name;

-- 4.Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(select first_name, last_name from actor limit 60)
union 
(select first_name, last_name from customer limit 60)
order by first_name
limit 15 offset 45;

