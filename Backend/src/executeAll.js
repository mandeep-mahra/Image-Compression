const Chroma = require("./chromaSubsampling.js");
const means = require("./kMeans.js")
const pixels = require("./getRGBA.js");
const e = require("express");

function execute(){
    Chroma.ChromaSS(1,2); // channels, samplesize
    means.kMeans(64, 3);
}
execute();
module.exports = {execute};