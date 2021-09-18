-- Examples
SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- To fix
-- 1
select * from customer;
select active, count(*) from customer group by active;

-- 2
select active, store_id, count(*) from customer group by store_id,active;

-- 3
select * from film;
select rating, avg(rental_duration) as media_locacao from film group by rating order by media_locacao desc;

-- 4
select * from address;
select district, count(*) as quantidade from address group by district order by quantidade desc;

-- group by with having
-- 1
SELECT rating, AVG(length) as average_durantion
FROM sakila.film
GROUP BY rating
having average_durantion between 115.0 and 121.5
order by average_durantion desc;

-- 2
SELECT rating, SUM(replacement_cost) as replacement_cost_sum
FROM sakila.film
GROUP by rating
having replacement_cost_sum > 3950.50
order by replacement_cost_sum asc;
    
