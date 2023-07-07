export default function refreshKMeans(){
    fetch('http://localhost:5000/kmeans')
    .then(res => res.blob())
    .then(res =>{
        const imageURL = URL.createObjectURL(res);
        var kImage = document.querySelector(".KMeans");
        const img = document.createElement('img');
        img.src = imageURL;
        img.className = "kMeansImage";
        img.style.maxHeight = '80%';
        img.style.maxWidth = '95%';
        img.style.paddingTop = '5%';
        kImage.appendChild(img);
        const kmeansSize = document.querySelector(".kmeansSize");
        kmeansSize.innerHTML = "Size " + (res.size/1000).toFixed(2) + " kb";
    })
}
