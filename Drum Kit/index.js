var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}

// function handleClick() {
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
