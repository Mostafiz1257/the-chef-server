const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const port = 5000;
const allData = require('./data/data.json')
app.get('/', (req, res) => {
    res.send('Chef cooking')
})
app.get('/allData', (req, res) => {
    res.send(allData)
})

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const dataDetails = allData?.find(pd => pd.id ==id)
    res.send(dataDetails)
})

app.listen(port, () => {
    console.log(`Chef cooking on port ${port}`);
})