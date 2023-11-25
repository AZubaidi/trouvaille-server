const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/', async (_req, res) => {
    try {
        const points = await knex('points').select('*');
        return res.status(200).json(points);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const points = await knex('points').select('*').where({id: id}).first();
        return res.status(200).json(points);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
