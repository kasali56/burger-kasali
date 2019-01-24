DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (id)
);