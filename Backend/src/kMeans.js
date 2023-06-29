const pixels = require("./getRGBA");
const convert = require("./matrixToImage")

const K = 64; // number of clusters

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

function getRandomPixels(matrix){
    l = matrix.length;
    b = matrix[0].length;
    let randomPixels = [];
    for(let i=0; i<K; i++){
        let x = Math.floor(Math.random()*(l));
        let y = Math.floor(Math.random()*(b));
        randomPixels.push([matrix[x][y], 1]);
    }
    return randomPixels;
}

function changeToClosest(matrix){
    let clusters = getRandomPixels(matrix);
    //Moving the clusters
    for(let i =0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            var closestValue = 0;
            var currentDist = 9007199254740991;
            for(let k = 0; k<clusters.length; k++){
                if(currentDist > (Math.abs(matrix[i][j] - clusters[k][0]))){
                    currentDist = Math.abs(matrix[i][j] - clusters[k][0]);
                    closestValue = k;
                }
            }
            
            clusters[closestValue][0] = (
                Math.round(((clusters[closestValue][0] * clusters[closestValue][1])+matrix[i][j])/(clusters[closestValue][1] + 1))
            );
            clusters[closestValue][1]++;
        }
    }
    // Assigning the values to pixels
    for(let i =0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            var closestValue = -1;
            var currentDist = 9007199254740991;
            for(let k = 0; k<clusters.length; k++){
                if(currentDist > (Math.abs(matrix[i][j] - clusters[k][0]))){
                    currentDist = Math.abs(matrix[i][j] - clusters[k][0]);
                    closestValue = clusters[k][0];
                }
            }
            matrix[i][j] = closestValue;
        }
    }

}

var rMatrix  = arrayToMatrix(pixels.red, pixels.width, pixels.height);
var gMatrix  = arrayToMatrix(pixels.green, pixels.width, pixels.height);
var bMatrix  = arrayToMatrix(pixels.blue, pixels.width, pixels.height);

changeToClosest(rMatrix);
changeToClosest(gMatrix);
changeToClosest(bMatrix);

convert.toImage(rMatrix, gMatrix, bMatrix);
