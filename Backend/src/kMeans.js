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


async function kMeans(K, numChannel){
    const convert = require("./matrixToImage");
    const { createCanvas, Image, getImageData} = require('canvas');

    

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
        changeToClosest(matrices[i]);
    
    const path = "../output/kMeans.jpg";
    convert.toImage(rMatrix, gMatrix, bMatrix, path);
}    


module.exports = {kMeans, arrayToMatrix, changeToClosest, getRandomPixels};
