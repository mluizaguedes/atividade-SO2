## Atividade SO2 - CRUD com HTML e Banco de Dados na AWS

Sistema **CRUD** simples, desenvolvido com o objetivo de praticar a integração de um site em HTML com um banco de dados, hospedados na AWS. O projeto foi elaborado para a disciplina de **Sistemas Operacionais II (SO2)**.


##
```bash
CREATE DATABASE crud_aws;

USE crud_aws;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```
