var drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; ++i) {
  drumButtons[i].addEventListener("click", function() {
    var drumType = this.innerHTML;
    playDrum(drumType);
    drumAnimation(drumType);
  });
}

function playDrum(drumType) {
  switch (drumType) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    default:
      console.log("Not Drum Matched!")
  }
}

document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  drumAnimation(event.key);
})

function drumAnimation(drumType) {
  var activeDrum = document.querySelector("." + drumType);
  activeDrum.classList.add("pressed");

  setTimeout(function(){activeDrum.classList.remove("pressed")}, 500);
}
