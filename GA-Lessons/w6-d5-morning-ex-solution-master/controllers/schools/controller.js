const Schools = require('../../models/schools');
const controller = {};

controller.show = (req, res) => {
    const id = req.params.id;
    Schools
        .findById(id)
        .then(data => {
            res.render('schools/show', data);
        })
        .catch(err => console.log('ERROR:', err));
};

module.exports = controller;