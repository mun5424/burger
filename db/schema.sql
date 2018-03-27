create database burger_db;
use burger_db;

CREATE TABLE burgers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100),
  devour boolean,
  primary key(id)
);

