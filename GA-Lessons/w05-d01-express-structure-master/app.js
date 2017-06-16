const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      port = process.env.PORT || 8080,

      packageData = require('./data');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const planets = require('./controllers/planets');
app.use('/planets', planets);

app.get('/', (req, res) => {
  console.log("index");
   res.render("index", packageData);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
