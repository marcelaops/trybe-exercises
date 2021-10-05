-- To fix
select * from film;

SELECT 
    AVG(length) as 'média de duração',
    min(length) as 'duração mínima',
    max(length) as 'duração mínima',
    sum(length) as 'tempo de exibição total',
    count(*) as 'filmes registrados'    
FROM
    film;