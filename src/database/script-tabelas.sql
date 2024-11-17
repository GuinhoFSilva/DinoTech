CREATE DATABASE dinotech;
USE dinotech; 

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(30)
);

CREATE TABLE resultadosQuiz(
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
pontuacao INT,
tempoTotal DECIMAL(10, 2)
CONSTRAINT resultadoUsuario FOREIGN KEY (fkUsuario)
    REFERENCES usuario(idUsuario)
);