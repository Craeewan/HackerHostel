const Mascots = require('../../models/mascots');

const controller = {};

controller.index = (req, res) => {
    Mascots
        .findAll()
        .then(data => {
            res.render('mascots/index', { mascots: data });
        })
        .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
    const id = req.params.id;
    Mascots
        .findByIdWithSchool(id)
        .then((data) => {
            res.render('mascots/show', data);
        })
        .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
    Mascots
        .schoolsAll()
        .then(data => {
            res.render('mascots/new', { schools: data });
        })
        .catch(err => console.log('ERROR:', err));
};

controller.edit = (req, res) => {
    const id = req.params.id;
    Mascots
        .findByIdWithSchool(id)
        .then(data => {
            res.render('mascots/edit', data);
        })
        .catch(err => console.log(err));
};

module.exports = controller;