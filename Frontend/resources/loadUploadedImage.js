import refreshKMeans from "./loadKmeansimage.js";
import refreshChroma from "./loadChoramaSS.js";
var flag = 0;
var originalImage = document.querySelector(".originalImage");
const image = sessionStorage.getItem("inputImage");
console.log(image);
const img = document.createElement('img');
img.src = image;
img.style.maxHeight = '80%';
img.style.maxWidth = '95%';
img.style.paddingTop = '5%';
originalImage.appendChild(img);

const base64Image = sessionStorage.getItem('image');

fetch('http://localhost:5000/upload', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image: base64Image })
})
.then((response) => {
    console.log("image sent");
})

function run(){
    refreshKMeans();
    refreshChroma();
} 

setTimeout(run, 1000);