const Chroma = require("./chromaSubsampling.js");
const means = require("./kMeans.js")
const pixels = require("./getRGBA.js");


function execute(){
    Chroma.ChromaSS(4,1); // samplesize, channels
    means.kMeans(64, 3);
}

module.exports = {execute};