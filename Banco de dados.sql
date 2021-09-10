CREATE DATABASE ClinicaOdontologica

CREATE TABLE Usuario (
	nome_de_usuario VARCHAR(100)PRIMARY KEY,
	senha VARCHAR(8) NOT NULL,
	nome_completo VARCHAR(100) NOT NULL,
	tipo_usuario VARCHAR(3) NOT NULL
);

CREATE TABLE Paciente (
	Cpf VARCHAR(20) PRIMARY KEY,
	nome_completo VARCHAR(100) NOT NULL,
	telefone VARCHAR(17),
	celular VARCHAR(17),
	email VARCHAR(100),
	cep VARCHAR (20) NOT NULL,
	endereco VARCHAR(100) NOT NULL,
	numero INT NOT NULL,
	complemento VARCHAR(30),
	data_nascimento SMALLDATETIME NOT NULL,
	sexo CHAR(2) NOT NULL
);

INSERT INTO Usuario (nome_de_usuario,senha,nome_completo,tipo_usuario) VALUES ('Admin','12345678', 'administrador teste','ADM');

SELECT* from Usuario;

