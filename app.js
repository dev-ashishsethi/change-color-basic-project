let textInput= document.querySelector("#textInput");
let btnRed= document.querySelector("#btnRed");
let btnBlue= document.querySelector("#btnBlue");
let btnGreen= document.querySelector("#btnGreen");
let output= document.querySelector("#output");

btnRed.addEventListener("click",textRed);
btnBlue.addEventListener("click",textBlue);
btnGreen.addEventListener("click",textGreen);
function textRed(){
    output.style.color="red";
    output.innerText=textInput.value;
}

function textBlue(){
    output.style.color="blue";
    output.innerText=textInput.value;
}

function textGreen(){
    output.style.color="green";
    output.innerText=textInput.value;
}