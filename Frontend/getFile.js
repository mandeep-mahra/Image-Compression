function getImage(image){
    var outputImage = image.files[0];
    var container = document.querySelector(".displayImage");
    var nextButton = document.querySelector(".nextButton");
    var imageComp = document.querySelector(".imageComp");

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
    sessionStorage.setItem('InputImage', img);
    sessionStorage.setItem('imageSize', image.files[0].size);
    console.log(image.files[0].size);
}