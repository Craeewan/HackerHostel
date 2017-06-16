const db = require('../db');

const Jokes = {};

Jokes.findAll = () => {
    return db.manyOrNone('SELECT * FROM jokes');
};

Jokes.findById = (id) => {
    return db.one(
        'SELECT * FROM jokes WHERE id=$1', [id]
    );
};

Jokes.create = (text) => {
    return db.one(
        'INSERT INTO jokes (text) VALUES ($1) returning id', [text]
    );
};

module.exports = Jokes;