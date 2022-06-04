const colors = ["green","red","rgb(180,20,255)","#F10f89"];

const btn = document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNum= getRandomNumber();
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum];
});

function getRandomNumber(){
    const number=Math.floor(Math.random() * colors.length);
    return number;
}

