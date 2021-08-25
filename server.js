const app = require('./src/app');
const path = require('path');
const port = process.env.PORT || 4000;
const express = require('express');
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get('/api/test', (req, res) => {
    res.json({ message: 'I am a message from server' });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})

app.get('/', (req, res) => {
    res.send({ message: "Hello world" });
})

app.listen(port, () => {
    console.log(`App listening on ${port}`)
});