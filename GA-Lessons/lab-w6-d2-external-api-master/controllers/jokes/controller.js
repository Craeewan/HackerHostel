const Jokes = require('../../models/jokes');

const controller = {};

controller.index = (req, res) => {
    Jokes
        .findAll()
        .then((data) => {
            res.render('jokes/index', { jokes: data });
        })
        .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
    const id = req.params.id;
    Jokes
        .findById(id)
        .then((data) => {
            res.render('jokes/show', data);
        })
        .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
    res.render('jokes/new');
};

module.exports = controller;