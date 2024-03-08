let btn=document.querySelector(".btn");
let popUp=document.querySelector(".popup");
let submitBtn=document.querySelector("#submitBtn");

btn.addEventListener("click",()=>{
    popUp.classList.add("popup-show");

})
submitBtn.addEventListener("click",()=>{
    popUp.classList.remove("popup-show");

})
