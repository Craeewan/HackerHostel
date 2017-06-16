# Jedis SQL Lab

##### 1. Seeding the Database
First, let's seed the database together. I'll be walking through this with you, but for later reference here is the series of commands you will need to do when you seed a database.

1. Create new database
* `createdb jedi_db` in terminal
2. Connect to the database to make sure it has been created
* `psql -d jedi_db` in terminal
* exit out of psql shell with `\q`
3. Run seeds file in new database
* `psql -d jedi_db -f jedis.sql` in the terminal
4. Connect to database and check if seeded correctly
* `psql -d jedi_db` in terminal
* `SELECT * FROM jedis;` in psql shell

##### 2. Exercise
1. SELECT all Jedis with red lightsabers
2. SELECT all Jedis who have been tempted by the darkside
3. UPDATE all gray lightsabers to green
4. UPDATE all Jedis who have been tempted by the darkside so that their training goes up by 10
5. UPDATE all Jedis with blue lightsabers so that their training goes up by 30
6. Select the temptation from all Jedis whose training is more thann 8 years.
7. SELECT the lightsaber color and name of all Jedis whose training is less than 8 years and who are not tempted by the darkside
8. Find the sum of all the jedis years_training who have blue lightsabers
9. Find the average years_training of all jedis who are not tempted by the darkside
10. Find the sum of all jedis years_training who are not tempted by the darkside and have purple lightsabers
