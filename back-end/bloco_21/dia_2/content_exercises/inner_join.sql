use sakila;
-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas. 
select * from actor;
select * from film_actor;

select a.actor_id, a.first_name, f.film_id
from actor as a
join film_actor as f
on a.actor_id = f.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
select * from staff;
select * from address;

select s.first_name, s.last_name, a.address
from staff as s
join address as a
on s.address_id = a.address_id ;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
select * from customer;
select * from address;

select customer_id, first_name, email, a.address_id, a.address
from customer as c
join address as a
on c.address_id = a.address_id
order by c.first_name desc
limit 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
select c.first_name, c.email, c.address_id, a.address_id, a.district
from customer as c
join address as a
on c.address_id = a.address_id
where a.district = 'California' and c.first_name like '%rene%';

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
select * from actor;
select * from film_actor;
select * from film;

select a.actor_id, a.first_name, f.film_id, f.title  
from actor as a
join film_actor as fa on a.actor_id = fa.actor_id
join film as f on fa.film_id = f.film_id;
