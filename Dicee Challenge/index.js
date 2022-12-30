//alert("Done!!");
var randomNumber1 = Math.floor( Math.random() * 6) +1;
var randomNumber2 = Math.floor( Math.random() * 6) +1;
console.log (randomNumber1);

var dice0 = document.querySelectorAll("img")[0];
var dice1 = document.querySelectorAll("img")[1];

var diceImg0 = "images/dice"+ randomNumber1+ ".png";
var diceImg1 = "images/dice"+ randomNumber2+ ".png";

dice0.setAttribute("src", diceImg0);
dice1.setAttribute("src", diceImg1);

var winner = randomNumber1 > randomNumber2 ? "Player 1 Wins!" : (randomNumber1 < randomNumber2 ? "Player 2 Wins!" : "Draw");

document.querySelector("h1").innerHTML = winner;