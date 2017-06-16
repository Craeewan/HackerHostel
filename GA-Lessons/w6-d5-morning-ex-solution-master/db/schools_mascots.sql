DROP TABLE IF EXISTS schools CASCADE;
DROP TABLE IF EXISTS mascots;

CREATE TABLE schools(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  image VARCHAR(250) NOT NULL
);

CREATE TABLE mascots(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  image VARCHAR(250) NOT NULL,
  school_id INTEGER REFERENCES schools(id) ON DELETE CASCADE NOT NULL
);

INSERT INTO schools (name, image) VALUES
(
  'University of Florida', 
  'https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2013/11/University_of_Florida_logo.jpg'
),
(
  'University of Kansas',
  'https://upload.wikimedia.org/wikipedia/en/6/65/KU_Seal.svg'
),
(
  'University of Cincinatti',
  'https://upload.wikimedia.org/wikipedia/en/f/f9/Uc-seal.png'
),
(
  'Williams College',
  'https://upload.wikimedia.org/wikipedia/en/1/19/Williams_College_Seal.svg'
),
(
  'Bethany College',
  'https://upload.wikimedia.org/wikipedia/en/1/1a/Bethany_College_%28KS%29_logo.png'
);

INSERT INTO mascots (name, image, school_id) VALUES
(
  'Alberta Gator',
  'https://photos.smugmug.com/Gator-Football-2014/Florida-Gators-Football-vs/i-5zr8qvD/0/L/Florida-Gators-Florida-Football-2014-Eastern-Michigan-The-Swamp-Fans-Alberta-L.jpg',
  1
),
(
  'Baby Jay',
  'https://c1.staticflickr.com/7/6191/6077088858_3f31e62d37_b.jpg',
  2
),
(
  'Bear Cat',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Cincinnati_Bearcat.png/220px-Cincinnati_Bearcat.png',
  3
),
(
  'Purple Cow',
  'http://cdnak1.psbin.com/img/mw=450/cr=n/d=oy1ys/zlav4ewnj03q4e00.jpg',
  4
),
(
  'Terrible Swede',
  'http://www.deseretnews.com/images/top/landmain/2490/2490.jpg?width=853&height=450',
  5
);
