const Chroma = require("./chromaSubsampling.js");
const means = require("./kMeans.js")
const pixels = require("./getRGBA.js");
const e = require("express");

function execute(){
    Chroma.ChromaSS(10,1); // samplesize, channels
    means.kMeans(64, 3);
}
execute();
module.exports = {execute};