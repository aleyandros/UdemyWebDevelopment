alert("Done!!");
var randomNumber1 = Math.floor( Math.random() * 6) +1;
var randomNumber2 = Math.floor( Math.random() * 6) +1;
console.log (randomNumber1);

var diceImg = document.querySelectorAll("img");
diceImg[0].setAttribute("src", "images/dice"+ randomNumber1+ ".png");
diceImg[1].setAttribute("src", "images/dice"+ randomNumber2+ ".png");

var winner = randomNumber1 > randomNumber2 ? "Player 1 Wins!" : (randomNumber1 < randomNumber2 ? "Player 2 Wins!" : "Draw");

document.querySelector("h1").innerHTML = winner;