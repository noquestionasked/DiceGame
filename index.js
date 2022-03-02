var randomNumber = Math.floor((Math.random())*6)+1;
console.log(randomNumber);

var randomImage = "dice"+randomNumber+".png";

var randomDiceImage = "/images/"+randomImage;

document.querySelector(".img1").setAttribute("src",randomDiceImage);


var randomNumber1 = Math.floor((Math.random())*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomDiceImage1 = "/images/"+randomImage1;
document.querySelector(".img2").setAttribute("src",randomDiceImage1);


if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 1 win's 😍";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 win's 😘";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🤦‍♀️";
}