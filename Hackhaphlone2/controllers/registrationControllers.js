const knex = require('knex');
const knexConfig = require('../db/config');
const db = knex(knexConfig.development);

const register = async (req, res) => {
    try {
        const {name, email} = req.body;
        await db('registrations').insert({name, email});
        res.status(201).send('registration');
    } catch (error) {
        console.error(error);
        res.status(500).send('Registration failed.');
    }
}

module.exports = {
    register,
};


