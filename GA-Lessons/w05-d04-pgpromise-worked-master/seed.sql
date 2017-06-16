DROP DATABASE IF EXISTS basic_monsters;
CREATE DATABASE basic_monsters;

\c basic_monsters;

CREATE TABLE Monsters (
   id SERIAL PRIMARY KEY,
   name VARCHAR (255) NOT NULL,
   danger_level INT NOT NULL
 );

INSERT INTO Monsters (name, danger_level) VALUES
  ('Minotaur', 5),
  ('Electric Eel', 2),
  ('Dragon', 8);

CREATE TABLE Locations (
	id SERIAL PRIMARY KEY,
	name VARCHAR (255) NOT NULL, 
	longitude INT NOT NULL, 
	latitude INT NOT NULL
);

INSERT INTO Locations (name, longitude, latitude) VALUES
	('Labyrinth', 10, 28);
