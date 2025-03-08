let body=document.querySelector("body");
let btn=document.querySelector(".btn");
let text=document.querySelector(".text");
let text1=document.querySelector("#text1");
let text2=document.querySelector("#text2");
let btn2=document.querySelector(".btn2");

btn.addEventListener("click",()=>{
    let notes=text.cloneNode(true);
    let button=btn2.cloneNode(true);
    notes.style.display="inline";
    button.style.display="inline";
    body.appendChild(notes);
    body.appendChild(button);
    button.addEventListener("click",()=>{
        notes.remove(); 
        button.remove();
    })
})