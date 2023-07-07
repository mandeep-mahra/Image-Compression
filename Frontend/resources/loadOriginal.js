export default function refreshOriginal(){
    fetch('http://localhost:5000/original')
    .then(res => res.blob())
    .then(res =>{
        const imageURL = URL.createObjectURL(res);
        const originalImage = document.querySelector(".originalImage");
        const img = document.createElement('img');
        img.src = imageURL;
        img.style.maxHeight = '80%';
        img.style.maxWidth = '95%';
        img.style.paddingTop = '5%';
        const originalSize = document.querySelector(".originalsize");
        originalSize.innerHTML = "Size " + (res.size/1000).toFixed(2) + " kb";
        originalImage.appendChild(img);
        
    })
}
