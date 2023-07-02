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
    



