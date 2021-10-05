-- Testing
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- To fix
SELECT UCASE('trybe');
select replace('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google'); 
select char_length('Uma frase qualquer');
select substring('A linguagem JavaScript está entre as mais usadas', 12, 10);
select LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
