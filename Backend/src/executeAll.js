const Chroma = require("./chromaSubsampling.js");
const means = require("./kMeans.js")

function execute(k, ss, kChannels, cChannels){
    Chroma.ChromaSS(ss, cChannels); // samplesize, channels
    means.kMeans(k, kChannels);
}

module.exports = {execute};