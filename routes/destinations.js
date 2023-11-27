const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/', async (_req, res) => {
    try {
        const destinations = await knex('destinations').select('*');
        console.log(destinations);
        return res.status(200).json(destinations);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const destinations = await knex('destinations').select('*').where({id: id}).first();
        return res.status(200).json(destinations);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id/points', async (req, res) => {
    const id = req.params.id;
    const destinations = await knex('destinations').where({id: id}).first();
    if (!destinations) return res.status(404).json({error: 'Destination not found.'});

    const points = await knex('points')
        .where({destination_id : id})
        .select('*');
    res.status(200).json(points);
});

module.exports = router;
