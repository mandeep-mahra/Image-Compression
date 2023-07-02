const express  = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());



app.post('/upload', (req, res) => {
    const image = req.body.image;
    console.log("weeheee");
    console.log(image);
});
app.get('/', (req, res) => {
    console.log("testing");
});

app.listen(5000, ()=>{
    console.log("listning to port 5000");
});