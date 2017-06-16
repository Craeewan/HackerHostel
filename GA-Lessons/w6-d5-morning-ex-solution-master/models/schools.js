const db = require('../db');

const Schools = {};

Schools.findById = (id) => {
    return db.one('SELECT * FROM schools WHERE id = $1', [id]);
};

module.exports = Schools;