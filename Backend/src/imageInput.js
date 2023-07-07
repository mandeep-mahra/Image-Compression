const express  = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');
const generate = require("./executeAll");

app.use(cors());
app.use(express.json());

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
    generate.execute();

    res.send("ok");
});

app.get('/subsample', (req, res) => {
    res.sendFile("/home/mandeep/Documents/1231/Image-Compression/Backend/output/chromaSS.jpg");
});
app.get('/kmeans', (req, res) => {
    res.sendFile("/home/mandeep/Documents/1231/Image-Compression/Backend/output/kMeans.jpg");
});
app.get('/original', (req, res) => {
    res.sendFile("/home/mandeep/Documents/1231/Image-Compression/Backend/input/image.jpg");
});

app.get('/', (req, res) => {
    console.log("testing");
});

app.listen(5000, ()=>{
    console.log("listning to port 5000");
});

