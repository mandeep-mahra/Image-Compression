
var container = document.querySelector(".displayImage");
var nextButton = document.querySelector(".nextButton");
var imageComp = document.querySelector(".imageComp");
var output = new Image();
async function getImage(image){
    var outputImage = image.files[0];
    output = outputImage;
    sessionStorage.setItem('image', outputImage);
    console.log(outputImage);
    const img = document.createElement('img');
    img.src = URL.createObjectURL(outputImage);

    container.innerHTML = '';
    img.style.maxHeight = '95%';
    img.style.maxWidth = '95%';
    container.style.display = 'block'; 
    nextButton.style.display = 'inline-block';
    imageComp.style.display = 'inline-block';
    container.appendChild(img);
    sessionStorage.setItem('inputImage', img.src);
    sessionStorage.setItem('imageSize', image.files[0].size);
}

function nextPage(){
    fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({output})
    }).then(() => {
        console.log(output);
    });  
    container.style.display = 'none'; 
    nextButton.style.display = 'none';
    imageComp.style.display = 'none';
    window.open("./displayPage.html","_self");    
}