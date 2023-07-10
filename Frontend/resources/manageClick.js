const prompt = document.querySelector(".settingsPrompt");
const close = document.querySelector(".backButton");
const settings = document.querySelector(".gear");
const back = document.querySelector(".home");
const mask = document.querySelector(".mask");
const sub = document.querySelector(".submitButton");
const valk  = document.querySelector(".kField");
const valkc = document.querySelector(".kcField");
const valss = document.querySelector(".sField");
const valcc = document.querySelector(".scField");


settings.addEventListener('click', ()=>{
    prompt.style.display = "block";
    mask.style.display = "inline-block";
    console.log(sessionStorage.getItem('valk'));
    valk.value  = parseInt(sessionStorage.getItem('valk'));
    valss.value = parseInt(sessionStorage.getItem('valss'));
    valkc.value = parseInt(sessionStorage.getItem('valkc'));
    valcc.value = parseInt(sessionStorage.getItem('valcc'));
});

close.addEventListener('click', ()=>{
    prompt.style.display = "none";
    mask.style.display = "none";
});

back.addEventListener('click', ()=>{
    window.open("./landingPage.html","_self"); 
});

function handleSubmit(){
    sessionStorage.setItem('valk', valk.value);
    sessionStorage.setItem('valss', valss.value);
    sessionStorage.setItem('valkc', valkc.value);
    sessionStorage.setItem('valcc', valcc.value);
}

sub.addEventListener('click', handleSubmit);