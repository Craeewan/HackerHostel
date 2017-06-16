const express = require('express'),
      app = express(),
      mustacheExpress = require('mustache-express'),
      port = process.env.PORT || 8080,

      cookieParser = require('cookie-parser');

// normal setup for express & mustache (if we want to go there)
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

const lilypadController = require('./controllers/lilypad');
app.use(lilypadController);

app.get("/", (req, res) => {
  res.redirect("/lilypad");
});

// start listening
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
