const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      port = process.env.PORT || 8080,

      // body-parser is useful for reading data from urlencoded requests
      bdPars = require('body-parser'),

      // here we require pg-promise
      pgp = require('pg-promise')(),
      // here we connect to the underlying database
      db = pgp(
	process.env.DATABASE_URL
	// modify the following string with your user name:
	  || 'postgres://timothygardner@localhost:5432/basic_monsters');

// normal setup for express & mustache (if we want to go there)
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// body-parser setup
app.use(bdPars.urlencoded({ extended: false }));
app.use(bdPars.json());

// no MVC yet, so we can focus on pg-promise and postman

app.get('/', (req, res) => {
  console.log("index");
  res.send("It would be awesome if an index page were here.");
});

app.get("/monsters", (req, res) => {
  console.log("----------------------------------------");
  console.log("in get at \"/monsters\"");

  console.log("simple select:");
  db.any("SELECT * FROM Monsters")
    .then((data) => {
      console.log("here's what we got: ");
      console.log(data);
      res.json({data: data});
    })
    .catch((error) => {
      console.log("oops, an error: ");
      console.log(error);
      res.send("error encountered");
    });
  
});

app.post("/monsters/new", (req, res) => {
  console.log("----------------------------------------");
  console.log("in post at \"/monsters/new\"");

  console.log("req.body:");
  console.log(req.body);  
  
  console.log("parsed data:");
  console.log(JSON.parse(req.body.data));

  const query = pgp.as.format(
    "INSERT INTO Monsters(name, danger_level) values ($[name], $[danger_level])", 
    JSON.parse(req.body.data));
  
  console.log("query:");
  console.log(query);

  db.any(query)
    .then((data) => {
      console.log("here's what we got: ");
      console.log(data);
      res.json({"data": data});
    })
    .catch((error) => {
      console.log("oops, an error: ");
      console.log(error);
      res.send("error encountered");
    });
});

// start listening
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
