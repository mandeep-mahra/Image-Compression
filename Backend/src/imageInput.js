const express  = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const generate = require("./executeAll");

app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.post('/upload', (req, res) => {
    var image = req.body.image;
    var cut = 0;
    for(var i =0; i<50;i++){
        if(image[i] == ','){
            cut = i;
            break;
        }
    }
    image = image.substring(cut+1)
    fs.writeFileSync("../input/image.jpg", image, "base64");
    generate.execute(req.body.k, req.body.ss, req.body.kChannels, req.body.cChannels);
    res.send("ok");
});

var currentDirectory = process.cwd();
const parentDirectory = path.resolve(currentDirectory, '..');

app.get('/subsample', (req, res) => {
    res.setHeader('Content-Type', 'image/jpg');
    res.sendFile(path.resolve(parentDirectory, 'output', 'chromaSS.jpg'));
});
app.get('/kmeans', (req, res) => {
    res.setHeader('Content-Type', 'image/jpg');
    res.sendFile(path.resolve(parentDirectory, 'output', 'kMeans.jpg'));
});
app.get('/original', (req, res) => {
    res.setHeader('Content-Type', 'image/jpg');
    res.sendFile(path.resolve(parentDirectory, 'input', 'image.jpg'));
});

app.get('/', (req, res) => {
    console.log("testing");
});

app.listen(5000, ()=>{
    console.log("listning to port 5000");
});

