import refreshKMeans from "./loadKmeansimage.js";
import refreshChroma from "./loadChoramaSS.js";
import refreshOriginal from "./loadOriginal.js";


const base64Image = sessionStorage.getItem('image');

async function run(){ 
    
    const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: base64Image })
    });
    
    refreshOriginal();
    refreshKMeans();
    refreshChroma();
    const removemask = document.querySelector(".mask");
    removemask.style.display = "none"
       
}
run();






