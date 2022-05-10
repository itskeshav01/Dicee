// Making an array of all images so that we can choose it as random
var allImg = ["images/dice1.png", "images/dice2.png","images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"]
// creating random number genrator to select random images and changing images using setAttribute
var randomNumber1 = Math.floor((Math.random() * 6));
document.querySelector(".img1").setAttribute("src", allImg[randomNumber1]);
// doing same for img2
var randomNumber2 = Math.floor((Math.random() * 6));
document.querySelector(".img2").setAttribute("src", allImg[randomNumber2]);

// setting up the result and displaying it using innerHTML
var heading = document.querySelector("h1");
// setting up winning conditions and changing the heading
if (randomNumber1 > randomNumber2){
    heading.innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 wins!🚩";
}
else{
    heading.innerHTML = "Draw!!";
}