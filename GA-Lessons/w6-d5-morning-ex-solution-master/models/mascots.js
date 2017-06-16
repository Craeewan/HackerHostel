const db = require('../db');

const Mascots = {};

Mascots.findAll = () => {
    return db.manyOrNone('SELECT * FROM mascots ORDER BY name');
};

Mascots.findByIdWithSchool = (id) => {
    return db.one(`
        SELECT 
            mascots.name AS mascot_name, mascots.image AS mascot_image, mascots.id AS mascot_id, 
            schools.name AS school_name, schools.image AS school_image, schools.id AS school_id
        FROM mascots 
        JOIN schools 
            ON mascots.school_id = schools.id 
        WHERE mascots.id=$1`, [id]);
};

Mascots.schoolsAll = () => {
    return db.any('SELECT * FROM schools');
};

Mascots.create = (name, image, school_id) => {
    return db.one(
        'INSERT INTO mascots (name, image, school_id) VALUES ($1, $2, $3) returning id', [name, image, school_id]
    );
};

Mascots.update = (id, name, image, school_id) => {
    return db.one(
        'UPDATE mascots SET name = $1, image = $2, school_id = $3 WHERE id = $4 returning id', [name, image, school_id, id]
    );
};

module.exports = Mascots;