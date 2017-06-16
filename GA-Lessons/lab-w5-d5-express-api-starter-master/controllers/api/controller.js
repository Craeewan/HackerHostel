const Pokemon = require('../../models/pokemon');

const controller = {};

controller.index = (req, res) => {
  Pokemon
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = request.body.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

// your work here


module.exports = controller;
