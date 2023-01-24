const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingSpan = document.querySelector(".rating-span");
const startDiv = document.querySelector(".start-div");
const endDiv = document.querySelector(".end-div");
const thankSpan = document.querySelector(".thank-span");
const firstPenddiv = document.querySelector(".first-p-end-div");
const secondPendDiv = document.querySelector(".second-p-end-div");
const ratingUsBtn = document.querySelector(".rating-us-btn");
let rating = 0;

ratingBtns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        ratingSpan.textContent = btn.textContent
    })
})

ratingUsBtn.addEventListener("click",()=>{window.location.reload()})  

submitBtn.addEventListener("click", ()=>{
    if(ratingSpan.textContent === ""){
        firstPenddiv.textContent = "You did not select any rating"
        thankSpan.textContent = "=("
        secondPendDiv.textContent = "We would appreciate it if you did. Click the button to return."
        ratingUsBtn.classList.remove("hidden")
    }
    startDiv.classList.add("hidden")
    endDiv.classList.remove("hidden")
})


