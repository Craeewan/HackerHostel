DROP TABLE IF EXISTS actors cascade;
DROP TABLE IF EXISTS movies;

-- enter create table commands here

INSERT INTO movies (title, release_year, genre) VALUES
  ('Tropic Thunder', 2008,'comedy'),
  ('Envy', 2004, 'comedy'),
  ('Tenacious D', 2006, 'comedy'),
  ('Anchorman', 2004, 'comedy'),
  ('Edward Scissorhands', 1990, 'drama');

INSERT INTO actors (name, movie_id) VALUES
  ('Ben Stiller', 2),
  ('Christina Applegate', 4),
  ('Owen Wilson', 1),
  ('Vince Vaughn', 4),
  ('Will Ferrell', 4),
  ('Jack Black', 1),
  ('Winona Ryder', 5);
