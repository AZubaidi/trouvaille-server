const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));

router.get('/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const user = await knex('users').select('*').where({username: username}).first();
        if (!user) return res.status(400).json({error: 'User not found'});

        const favorites = await knex('favorites').select('*').where({user_id: user.id});
        return res.status(200).json(favorites);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/:username', async (req, res) => {
    const username = req.params.username;
    const point_id = req.body.point_id;
    if (!point_id) return res.status(400).json({error: 'Please provide a point_id in the body.'});
    try {
        const user = await knex('users').select('*').where({username: username}).first();
        if (!user) return res.status(400).json({error: 'User not found'});
        const newFavourite = await knex('favorites').insert({
            user_id: user.id,
            point_id: point_id,
        });
        return res.status(201).json({newFavourite});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
