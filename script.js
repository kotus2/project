// long time no see javaskripti

let logo = document.querySelectorAll(".picToExpand");
console.log(logo);

logo.forEach((element)=>{makeBigger(element)});
logo.forEach((element)=>{makeSmaller(element)});

function makeBigger(element){
    element.addEventListener("mouseenter", ()=>{element.setAttribute("class", "makeBigger")});
}

function makeSmaller(element){
    element.addEventListener("mouseleave", ()=>{element.classList.remove("makeBigger")});
}
