/**
 * Converts a flat array into a matrix of specified width and height.
 * @param {Array} array - The flat array to convert into a matrix.
 * @param {number} width - The desired width of the matrix.
 * @param {number} height - The desired height of the matrix.
 * @returns {Array} - The matrix representation of the input array.
 */
function arrayToMatrix(array, width, height) {
    var matrix = [];
    var temp = [];

    // Iterate over each element in the array
    for (var i = 0; i < array.length; i++) {
        // Check if a new row should be created
        if (i % width === 0 && i !== 0) {
            // Push the current row to the matrix
            matrix.push(temp);
            // Reset the temporary row array
            temp = [];
        }
        // Add the current element to the temporary row array
        temp.push(array[i]);
    }

    // Push the last row to the matrix
    matrix.push(temp);

    // Return the resulting matrix
    return matrix;
}

/**
 * Generates random pixels from a given matrix.
 * @param {Array} matrix - A two-dimensional array representing an image or pixel grid.
 * @param {number} K - The number of random pixels to generate.
 * @returns {Array} - An array of pixel values with a count of 1.
 */
function getRandomPixels(matrix, K) {
    // Get the dimensions of the matrix
    const length = matrix.length;
    const breadth = matrix[0].length;
    
    // Array to store the random pixels
    let randomPixels = [];
    
    // Generate K random pixels
    for(let i = 0; i < K; i++) {
        // Generate random coordinates within the matrix boundaries
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * breadth);
        
        // Retrieve the pixel value at the generated coordinates and store it in the randomPixels array
        randomPixels.push([matrix[x][y], 1]);
    }
    
    // Return the array of random pixels
    return randomPixels;
}

/**
 * Changes the values in the matrix to their closest cluster value.
 * @param {Array} matrix - The matrix to be updated.
 * @param {number} K - The number of clusters.
 */
function changeToClosest(matrix, K) {
    // Generate random clusters
    let clusters = getRandomPixels(matrix, K);

    // Moving the clusters
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            var closestValue = 0;
            var currentDist = 9007199254740991;

            // Find the closest cluster value to the current pixel
            for (let k = 0; k < clusters.length; k++) {
                if (currentDist > Math.abs(matrix[i][j] - clusters[k][0])) {
                    currentDist = Math.abs(matrix[i][j] - clusters[k][0]);
                    closestValue = k;
                }
            }

            // Update the closest cluster value based on the current pixel
            clusters[closestValue][0] = Math.round(((clusters[closestValue][0] * clusters[closestValue][1]) + matrix[i][j]) / (clusters[closestValue][1] + 1));
            clusters[closestValue][1]++;
        }
    }

    // Assign the closest cluster values to the pixels in the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            var closestValue = -1;
            var currentDist = 9007199254740991;

            // Find the closest cluster value to the current pixel
            for (let k = 0; k < clusters.length; k++) {
                if (currentDist > Math.abs(matrix[i][j] - clusters[k][0])) {
                    currentDist = Math.abs(matrix[i][j] - clusters[k][0]);
                    closestValue = clusters[k][0];
                }
            }

            // Update the matrix with the closest cluster value
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
        changeToClosest(matrices[i], K);
    
    const path = "../output/kMeans.jpg";
    convert.toImage(rMatrix, gMatrix, bMatrix, path);
}    


module.exports = {kMeans, arrayToMatrix, changeToClosest, getRandomPixels};
