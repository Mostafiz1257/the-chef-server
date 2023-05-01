const express = require('express');
const app = express();
const port = 5000;
const allData = require('./data/data.json')
app.get('/', (req, res) => {
    res.send('Chef cooking')
})
app.get('/allData', (req, res) => {
    res.send(allData)
})


app.listen(port, () => {
    console.log(`Chef cooking on port ${port}`);
})