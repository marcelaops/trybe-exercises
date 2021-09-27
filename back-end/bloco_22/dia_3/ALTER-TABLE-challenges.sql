-- 1. Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

SELECT * from locations;
SHOW COLUMNS FROM locations;

ALTER TABLE locations CHANGE street_address address VARCHAR(40);

-- 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

SHOW COLUMNS FROM regions;
ALTER TABLE regions CHANGE region_name region VARCHAR(25);

-- 3. Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.

SHOW COLUMNS FROM countries;
SELECT * FROM countries;
ALTER TABLE countries CHANGE country_name country VARCHAR(40);