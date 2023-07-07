
var container = document.querySelector(".displayImage");
var nextButton = document.querySelector(".nextButton");
var imageComp = document.querySelector(".imageComp");
var output = new Image();
sessionStorage.clear();

function getImage(image){
    var outputImage = image.files[0];
    output = outputImage;
   
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
    var sendImage = new Image();
    sendImage.src = URL.createObjectURL(outputImage);
    sendImage = outputImage;
    sessionStorage.setItem('imageSize', image.files[0].size);
    const reader = new FileReader();
    console.log(image.files[0].size);
    reader.onload = function(event) {
        const base64Image = event.target.result;
        sessionStorage.setItem("image", base64Image);
        
    };
    reader.readAsDataURL(outputImage);
}

function nextPage(){
    
    container.style.display = 'none'; 
    nextButton.style.display = 'none';
    imageComp.style.display = 'none';
    window.open("./displayPage.html","_self");    
}