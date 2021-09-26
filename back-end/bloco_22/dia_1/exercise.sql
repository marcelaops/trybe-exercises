DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA zoo;

USE zoo;

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    area_zoologico VARCHAR(100)
) ENGINE=Innodb;

CREATE TABLE especie(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE=Innodb;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
)  ENGINE=Innodb;

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sexo VARCHAR(5) NOT NULL,
    idade INT NOT NULL,
    localizacao_id INT NOT NULL,
    especie_id INT NOT NULL,
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id),
	FOREIGN KEY (especie_id) REFERENCES especie (especie_id)
) ENGINE=Innodb;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
) ENGINE=Innodb;

CREATE TABLE cuidador_animal(
	cuidador_animal_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
) ENGINE=Innodb;

