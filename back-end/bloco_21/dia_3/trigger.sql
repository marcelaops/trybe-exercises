CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;


select * from carros;
select * from log_operacoes;
-- To fix
-- 1.Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

use betrybe_automoveis;
delimiter $$
create trigger TriggerInsercao
	before insert on carros
    for each row 
begin
	set new.data_atualizacao = now(),
		new.acao = 'INSERÇÃO',
		new.disponivel_em_estoque = 1;
end $$
delimiter ;

insert into carros(acao) values (10);
select * from carros;

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

use betrybe_automoveis;
delimiter $$
create trigger TriggerAtualizacao
	before update on carros
    for each row
begin
	set new.data_atualizacao = now(),
		new.acao = 'Atualização';
end $$
delimiter ;	

update carros set acao = 10 where id_carro = 1 ;
select * from carros;
    
    
-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

use betrybe_automoveis;
delimiter $$
create trigger TriggerExclusao
	after delete on carros
    for each row
begin 
	insert into log_operacoes(tipo_operacao, data_ocorrido)
    values('EXCLUSÃO', now());
end $$
delimiter $$;

delete from carros where id_carro = 1;
select * from carros;
select * from log_operacoes;