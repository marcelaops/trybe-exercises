-- 1.Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
use sakila;
delimiter $$

create function ReturnsTotalPayments(id int)
returns int reads sql data
begin
	declare total_payments int;
    select count(*)
    from payment
    where payment.customer_id = id into total_payments;
    return total_payments;
end $$
delimiter ;

select ReturnsTotalPayments(12);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
use sakila;
delimiter $$

create function ReturnsFilm(id int)
returns varchar(300) reads sql data
begin
	declare film_name varchar(300);
    select f.title
	from film as f
	join inventory as i on f.film_id = i.film_id
	where i.inventory_id = id
    into film_name;
    return film_name;
end $$

delimiter ;

select ReturnsFilm(1);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
use sakila;
delimiter $$

create function ReturnsFilmsBYCategory(category varchar(50))
returns int reads sql data
begin
	declare total int;
    select count(*)
    from film as f
	join film_category as fc on f.film_id = fc.film_id
	join category as c on c.category_id = fc.category_id
    where c.name = category
    into total;    
    return total;
end $$

delimiter ;

select ReturnsFilmsBYCategory('Action');