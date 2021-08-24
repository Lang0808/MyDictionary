const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;


app.get('/', (req, res) => {
    res.send("Hello World");
});

const api = require('./route/api');
const userRoute = require('./route/user.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(api);
app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`Example app is listening at localhost::${port}`);
});