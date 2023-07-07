const chromaDownload = document.querySelector(".chromaDown");
const kMeansDownload = document.querySelector(".kMeanDown");

chromaDownload.addEventListener('click', () => {
    const url = document.querySelector(".chromaImage").src;
    const a = document.createElement('a')
    a.href = url;
    a.download = "Reduced_chromaSubSamplingImage";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

kMeansDownload.addEventListener('click', () => {
    const url = document.querySelector(".kMeansImage").src;
    const a = document.createElement('a')
    a.href = url;
    a.download = "Reduced_kMeansImage";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});