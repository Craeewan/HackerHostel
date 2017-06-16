DROP DATABASE IF EXISTS basic_monsters;
CREATE DATABASE basic_monsters;

\c basic_monsters;

CREATE TABLE Monsters (
   id SERIAL PRIMARY KEY,
   name VARCHAR (256) NOT NULL,
   danger_level INT NOT NULL
 );

INSERT INTO Monsters (name, danger_level) VALUES
  ('Minotaur', 5),
  ('Electric Eel', 2),
  ('Dragon', 8);
