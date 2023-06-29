const sharp = require('sharp');

function toImage(rMatrix, gMatrix, bMatrix){
  const rgbMatrix = [];
  let temp = [];
  for(var i=0; i<rMatrix.length; i++){
      temp = []
      for(var j=0; j<rMatrix[0].length; j++){
          temp.push([rMatrix[i][j], gMatrix[i][j], bMatrix[i][j]])
      }
      rgbMatrix.push(temp);
  }

  const buffer = Buffer.from(rgbMatrix.flat(2));

  const image = sharp(buffer, {
    raw: {
      width: rMatrix[0].length,
      height: rMatrix.length,
      channels: 3
    }
  });

  image.toFile('../output/output.jpg', (err) => {
    if (err) {
      console.error('Error saving image:', err);
    } else {
      console.log('Image saved successfully!');
    }
  });
}

module.exports = {toImage};