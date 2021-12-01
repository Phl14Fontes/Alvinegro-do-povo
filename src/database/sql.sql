-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

/* para workbench - local - desenvolvimento */
use alvinegrodoPovo;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(10),
    email varchar(45),
    senha varchar(45)	
);
create table enquete (
	idEnquete int primary key,
    descricao varchar(45)
);
create table voto (
	fkEnquete int,
    fkUsuario int,
    primary key (fkEnquete, fkUsuario),
    foreign key (fkEnquete) references enquete (idEnquete),
    foreign key (fkUsuario) references usuario (idUsuario),
    opcao1 int,
    opcao2 int,
    constraint check_opcao1 check (opcao1 = 1),
    constraint check_opcao2 check (opcao2 = 1),
);