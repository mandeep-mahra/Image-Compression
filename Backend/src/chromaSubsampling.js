function ChromaSS(sampleValue, numChannel){    
    const { createCanvas, Image, getImageData} = require('canvas');
    const convert = require("./matrixToImage");

    function arrayToMatrix(array, width ,height){
        var matrix  = [];
        var temp = [];
        for(var i=0; i<=(height * width); i++){
            if(i%width == 0 && i != 0){
                matrix.push(temp)
                temp = []
            }
            temp.push(array[i]);   
        }
        return matrix;
    }

    function mergeColor(rowStart, rowEnd, colStart, colEnd , matrix){
        rowEnd = Math.min(rowEnd, matrix.length-1);
        colEnd = Math.min(colEnd, matrix[0].length-1);
        var randCol = Math.round(Math.random() * (colEnd - colStart) + colStart);
        var randRow = Math.round(Math.random() * (rowEnd - rowStart) + rowStart);
        var selectedColor = matrix[randRow][randCol];
        for(var i=rowStart; i<rowEnd; i++){
            for(var j=colStart; j<colEnd; j++){
                matrix[i][j] = selectedColor;
            }
        }
    }

    function subsampling(matrix){
        for(let i =0; i<matrix.length; i+=sampleValue){
            for(let j=0; j<matrix[0].length; j+=sampleValue){
                mergeColor(i, i+sampleValue, j, j+sampleValue, matrix);
            }
        }
    }

    const img = new Image();
    img.src = "../input/image.jpg";
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

    var rMatrix  = arrayToMatrix(red, width, height);
    var gMatrix  = arrayToMatrix(green, width, height);
    var bMatrix  = arrayToMatrix(blue, width, height);

    var matrices = [rMatrix, gMatrix, bMatrix];
    for(var i =0; i<numChannel ; i++)
        subsampling(matrices[i]);

    const path = "../output/chromaSS.jpg";
    convert.toImage(rMatrix, gMatrix, bMatrix, path);
}

module.exports = {ChromaSS};