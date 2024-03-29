const express = require('express');
const cors = require('cors');

const app = express();

const api = require('./route/api');
const userRoute = require('./route/user.routes');
const wordRoute = require('./route/word.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(api);
app.use('/api', userRoute);
app.use('/api', wordRoute);

module.exports = app;