const pixels = require("./getRGBA");
const convert = require("./matrixToImage");

var sampleValue = 2;

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

var rMatrix  = arrayToMatrix(pixels.red, pixels.width, pixels.height);
var gMatrix  = arrayToMatrix(pixels.green, pixels.width, pixels.height);
var bMatrix  = arrayToMatrix(pixels.blue, pixels.width, pixels.height);

subsampling(rMatrix);
subsampling(gMatrix);
subsampling(bMatrix);

convert.toImage(rMatrix, gMatrix, bMatrix);