// random dice number geneartor [1-6];
var i = Math.floor(Math.random() * 6) + 1;
var j = Math.floor(Math.random() * 6) + 1;

// change players dice images given by random dice number
document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + i + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + j + ".png");

// show winner or draw
if (i > j) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (i == j) {
  document.querySelector("h1").innerHTML = "Draw";
}
else {
  document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
}
