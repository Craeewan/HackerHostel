const pgp = require('pg-promise')();

const db = pgp(
    process.env.DATABASE_URL ||
    // modify the following string with your user name:
    // 'postgres://<username>@localhost:5432/<database name>');
    'postgres://jared@localhost:5432/schools_mascots_test');


module.exports = db;