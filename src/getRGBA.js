const { createCanvas, Image, getImageData} = require('canvas')

const img = new Image();
img.src = "../images/random-dice.jpg"
var canvas = createCanvas(img.width, img.height);
const context = canvas.getContext('2d')
context.drawImage(img, 0, 0);

const width = img.width, height = img.height;
var imageData = context.getImageData(0, 0, width, height);
var red = []
var green = []
var blue = []
var alpha = []
for(var i = 0; i<(img.height); i++){
    for(var j = 0; j<(img.width); j++){
        var index = (i*img.width + j) * 4;
        red.push(imageData.data[index]);
        green.push(imageData.data[index + 1]);
        blue.push(imageData.data[index + 2]);
        alpha.push(imageData.data[index + 3]);
    }
}

module.exports = {red, green, blue, alpha, width, height};