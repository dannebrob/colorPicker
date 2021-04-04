const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//Click event

btn.addEventListener("click", function(){


    let hexColor = `RGB(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//Random numver fro
function getRandomNumber(){
return Math.floor(Math.random()*256);
}
function getRandomPercent(){
    return Math.floor(Math.random()*100/10);
}

//Working
Math.floor(Math.random()*256);