-- Challenge
-- 1
select if(15 mod 2 = 0, 'par', 'ímpar') as 'Par ou ímpar';

-- 2
select 220 div 12;

-- 3
select 220 mod(220 div 12);
select if (220 mod(220 div 12) > 0, 'sim', 'não') as 'temos lugares sobrando?';

-- To fix
-- 1
select round(15 + (rand() * 5));
select floor(15 + (rand() * 5));

-- 2
select round(15.7515971, 5);
select floor(15.7515971);

-- 3
select floor(39.494);

-- 4
select ceil(85.234);
