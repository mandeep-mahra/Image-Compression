const prompt = document.querySelector(".settingsPrompt");
const close = document.querySelector(".close");
const settings = document.querySelector(".gear");
const body = document.querySelector("body");

settings.addEventListener('click', ()=>{
    prompt.style.display = "block";
});

close.addEventListener('click', ()=>{
    prompt.style.display = "none";
});




