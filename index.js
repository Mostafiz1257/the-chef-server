const express = require('express');
const app = express();
const cors = require('cors')
const port =process.env.PORT || 5000;
const allData = require('./data/data.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef cooking')
});
app.get('/allData', (req, res) => {
    res.send(allData)
})

app.get('/allData/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const dataDetails = allData.find(pd => parseInt(pd.id) ===id)
    res.send(dataDetails)
  
})

app.listen(port, () => {
    console.log(`Chef cooking on port ${port}`)
    
})