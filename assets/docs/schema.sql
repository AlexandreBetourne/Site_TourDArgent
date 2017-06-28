## /Applications/MAMP/Library/bin/mysql -uroot -p

## SHOW DATABASES; pour voir les bases existantes 
## SHOW TABLES; pour voir les tables de la base

##INSERT INTO clients VALUES (Jean, Dupond, jean.dupond@gmail.com, 0635721783, 01/02/2017, 3)

CREATE DATABASE tourdargent;
USE tourdargent; 

## WE CREATE A TABLE WITH CLIENT IDENTITY 
CREATE TABLE clients(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(128),
    lastname VARCHAR(128),
    email VARCHAR(128),
    telephone VARCHAR(64), 
    resa DATE,
    clients INT
);