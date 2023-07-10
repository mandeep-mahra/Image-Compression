import refreshKMeans from "./loadKmeansimage.js";
import refreshChroma from "./loadChoramaSS.js";
import refreshOriginal from "./loadOriginal.js";


const base64Image = sessionStorage.getItem('image');

async function run(valK , valSS, valKC, valCC){
    
    const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            image: base64Image,
            k : valK,
            ss : valSS,
            kChannels : valKC, 
            cChannels : valCC, 
        })
    });
    
    refreshOriginal();
    refreshKMeans();
    refreshChroma();
    const removemask = document.querySelector(".mask");
    removemask.style.display = "none"
       
}
if(!sessionStorage.getItem('valk')){
    sessionStorage.setItem('valk', 64);
    sessionStorage.setItem('valss', 2);
    sessionStorage.setItem('valkc', 3);
    sessionStorage.setItem('valcc', 1); 
}
var valk  = parseInt(sessionStorage.getItem('valk'));
var valss = parseInt(sessionStorage.getItem('valss'));
var valcc = parseInt(sessionStorage.getItem('valcc'));
var valkc = parseInt(sessionStorage.getItem('valkc'));

run(valk, valss, valcc, valkc);


export {run};



