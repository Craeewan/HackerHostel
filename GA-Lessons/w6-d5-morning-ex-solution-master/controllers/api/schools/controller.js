const Schools = require('../../../models/schools');

const controller = {};

controller.index = (req, res) => {
    Schools
        .findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log('ERROR:', err));
};

module.exports = controller;