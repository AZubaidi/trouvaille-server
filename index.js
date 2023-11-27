require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  // origin: 'http://localhost:3000'
}));

const destinationsRoute = require('./routes/destinations.js');
app.use('/api/destinations', destinationsRoute);

const pointsRoute = require('./routes/points.js');
app.use('/api/points', pointsRoute);

const registerRoute = require('./routes/register.js');
app.use('/api/register', registerRoute);

const loginRoute = require('./routes/login.js');
app.use('/api/login', loginRoute);

const favoritesRoute = require('./routes/favorites.js');
app.use('/api/favorites', favoritesRoute);

app.get('/api', (_req, res) => {
  res.send(`API is running`);
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
