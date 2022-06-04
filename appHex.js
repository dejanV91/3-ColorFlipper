const numbersCol=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.getElementById("btn");
const textCol=document.querySelector(".color");

btn.addEventListener("click", function(){
    const hexaColor=getRandomHex();
    document.body.style.backgroundColor=hexaColor;
    textCol.textContent=hexaColor;
});

function getRandomNumberH(){
    const number = Math.floor(Math.random() * numbersCol.length);
    return number;
}


function getRandomHex(){
    const hexColor=["#"];
    for(let i=0; i < 6; i++){
        hexColor.push(numbersCol[getRandomNumberH()]);
    }
    return hexColor.join('');
}

