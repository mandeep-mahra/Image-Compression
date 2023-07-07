export default function refreshChroma(){
    fetch('http://localhost:5000/subsample')
    .then(res => res.blob())
    .then(res =>{
        const imageURL = URL.createObjectURL(res);
        var chromaImage = document.querySelector(".ChromaSS");
        const img = document.createElement('img');
        img.src = imageURL;
        img.className = "chromaImage";
        const chromaSize = document.querySelector(".chromaSize");
        chromaSize.innerHTML = "Size " + (res.size/1000).toFixed(2) + " kb";
        img.style.maxHeight = '80%';
        img.style.maxWidth = '95%';
        img.style.paddingTop = '5%';
        chromaImage.appendChild(img);
    })
}


