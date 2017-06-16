const Mascots = require('../../../models/mascots');
const controller = {};


controller.create = (req, res) => {
    const name = req.body.name,
        image = req.body.image,
        school_id = req.body.school_id;
    Mascots
        .create(name, image, school_id)
        .then(data => res.json(data))
        .catch(err => console.log('ERROR:', err));
}

controller.update = (req, res) => {
    const id = req.params.id,
        name = req.body.name,
        image = req.body.image,
        school_id = req.body.school_id;

    Mascots
        .update(id, name, image, school_id)
        .then(data => res.json(data))
        .catch(err => console.log('ERROR', err));

}

module.exports = controller;