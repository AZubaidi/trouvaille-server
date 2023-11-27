const express = require("express");
const router = express.Router();
const knex = require('knex')(require('../knexfile'));
const jwt = require("jsonwebtoken");

router.get('/', async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please include your bearer token");
      }
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const userId = decoded.id
        const user = await knex('users').select('*').where({id: userId}).first();
        if (!user) return res.status(400).json({error: 'User not found'});

        const favorites = await knex('favorites').select('*').where({user_id: user.id});
        return res.status(200).json(favorites);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'This point is already favorited.' });
    }
});

router.post('/', async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please include your bearer token");
      }
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];
    const point_id = req.body.point_id;
    if (!point_id) return res.status(400).json({error: 'Please provide a point_id in the body.'});
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const userId = decoded.id;
        const user = await knex('users').select('*').where({id: userId}).first();
        if (!user) return res.status(400).json({error: 'User not found'});
        await knex('favorites').insert({
            user_id: user.id,
            point_id: point_id,
        })
        .onConflict(['user_id', 'point_id'])
        .ignore(); //.ignore will ignore the insert if exists
        return res.status(201).json({user_id: user.id, point_id: point_id});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'This point is already favorited.' });
    }
});

router.delete('/:id', async (req, res) => {
    const point_id = req.params.id;
    if (!req.headers.authorization) {
        return res.status(401).send("Please include your bearer token");
      }
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        const userId = decoded.id;
        const user = await knex('users').select('*').where({id: userId}).first();
        if (!user) return res.status(400).json({error: 'User not found'});
        await knex('favorites').where({user_id: user.id, point_id: point_id}).del();
        return res.status(201).json('successfully deleted');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
