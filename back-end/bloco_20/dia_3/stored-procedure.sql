-- Example
-- Procedure com parâmetros de entrada (IN) 
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

CALL ShowActorsWithSyllable('lope');

-- Challenges
-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
use sakila;
delimiter $$
create procedure ShowActorsMostPopulars() 
begin
SELECT 
    actor_id AS 'id do ator', COUNT(*) AS 'quantidade de filmes'
FROM
    film_actor
GROUP BY actor_id	
ORDER BY `quantidade de filmes` DESC
LIMIT 10;
end $$
delimiter ;

call sakila.ShowActorsMostPopulars();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
use sakila;
delimiter $$
create procedure FindFilmFromCategory (in category_entry varchar(100))
begin
	select f.film_id, f.title, c.category_id, c.name
	from film as f
	join film_category as fc on f.film_id = fc.film_id
	join category as c on c.category_id = fc.category_id
    where c.name = category_entry;
end $$
delimiter ;

call FindFilmFromCategory('Action');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
use sakila;
delimiter $$
create procedure ShowIfCustomerIsActive(in emailInput varchar(100), out isActive bool)
begin
	set isActive = (select active from customer where email = emailInput);
end $$
delimiter ;

select @activeStatus;
call ShowIfCustomerIsActive('MARY.SMITH@sakilacustomer.org', @activeStatus);
select @activeStatus;