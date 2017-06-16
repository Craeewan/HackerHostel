DROP TABLE IF EXISTS jedis;

CREATE TABLE jedis (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  lightsaber_color varchar(50) NOT NULL,
  years_training integer NOT NULL,
  tempted_by_dark_side boolean NOT NULL,
  temptation varchar(50) NOT NULL
);

INSERT INTO jedis (name, lightsaber_color, years_training, tempted_by_dark_side, temptation) VALUES
  ('Jason Antilles', 'white', 14, FALSE, 'burnt popcorn'),
  ('Adrian Tarkin', 'blue', 12, FALSE, 'mints from frontlines'),
  ('Gersh Windu', 'gray', 15, FALSE, 'nodeman'),
  ('Chancellor Carela', 'purple', 18, FALSE, 'semicolons'),
  ('Darth Simpson','red',7,TRUE, 'double quotes'),
  ('Master Reynolds', 'green', 14, FALSE, 'Bioshock'),
  ('Anthony the Hutt', 'red', 7, TRUE, 'crashing space shuttles'),
  ('Amanda Sidious', 'red', 19, TRUE, 'badminton'),
  ('Darth Mohr', 'red', 9, TRUE, 'singing telegrams'),
  ('Robert Fett', 'orange', 14, FALSE, '80s aerobic videos'),
  ('Crae Beru', 'green', 8, FALSE, '.jpg files'),
  ('Oola Cabral', 'red', 19, TRUE, 'quantum physics'),
  ('Admiral Kaban', 'blue', 10, FALSE, 'Berry Deli'),
  ('Sam Kota', 'orange', 14, FALSE, 'anime'),
  ('Kasaun Kanata', 'red', 8, TRUE, 'magic'),
  ('Joel Skywalker', 'blue', 6, TRUE, 'accurate physics'),
  ('Tricia Revan', 'red', 2, TRUE, 'tourists'),
  ('Dave-3P0', 'purple',20, FALSE, 'The Office'),
  ('Emperor Chapman', 'red',14, TRUE, 'spelling names backwards'),
  ('Brett (Brett?) Binks', 'yellow', 100, FALSE, 'Tom Sawyer'),
  ('Caroline Gunray', 'purple',9, FALSE, 'Pantera'),
  ('Jackie Calrissian', 'brown',13, FALSE, 'corgis'),
  ('General Koreeda', 'gray', 12, FALSE, 'NASA posters'),
  ('Bilal Mothma', 'blue',14, FALSE, 'fancy coffee'),
  ('Paul Solo', 'red',10, TRUE, 'GA shitty coffee'),
  ('Babatunde-D2', 'green', 2, FALSE, 'detective thriller novels'),
  ('Sabrina Kenobi', 'blue', 23, FALSE, 'marshmallow peeps'),
  ('Kylo Lemfadli', 'red', 9, TRUE, 'water bottles');
