DROP DATABASE IF EXISTS mymovies;

CREATE DATABASE IF NOT EXISTS mymovies;

USE mymovies;

CREATE TABLE movies (
  id INT(11) NOT NULL Auto_Increment,
  title varchar(60) NOT NULL,
  releaseDate INT(11),
  genre varchar(40),
  PRIMARY KEY(id)
);