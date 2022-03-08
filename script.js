var player1Points = 0;
var player2Points = 0;

var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

function rollDice(player, dice) {
  if (player == 1) {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice1.png");
  } else if (player == 2) {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice2.png");
  } else if (player == 3) {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice3.png");
  } else if (player == 4) {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice4.png");
  } else if (player == 5) {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice5.png");
  } else {
    document
      .getElementsByClassName(dice)[0]
      .setAttribute("src", "images/dice6.png");
  }
}

document.querySelector(".rollDice").addEventListener("click", function () {
  rollDice(player1, "dice1");
  rollDice(player2, "dice2");

  //Adding the points

  if (player1 > player2) {
    player1Points++;
  } else if (player2 > player1) {
    player2Points++;
  } else {
    //nothing happens
  }
  player1 = Math.floor(Math.random() * 6) + 1;
  player2 = Math.floor(Math.random() * 6) + 1;
});

document.querySelector(".seePoints").addEventListener("click", function () {
  document.querySelector(".player1Points").innerHTML =
    "Player1 points : " + player1Points;
  document.querySelector(".player2Points").innerHTML =
    "Player2 points : " + player2Points;
});

document.querySelector(".restart").addEventListener("click", function () {
  player1Points = 0;
  player2Points = 0;
  document
    .getElementsByClassName("dice2")[0]
    .setAttribute("src", "images/dice6.png");
  document
    .getElementsByClassName("dice1")[0]
    .setAttribute("src", "images/dice6.png");
  document.querySelector(".player1Points").innerHTML = "Player 1";
  document.querySelector(".player2Points").innerHTML = "Player 2";
  document.querySelector(".dicee").innerHTML = "Dice Game";
});

document.querySelector(".results").addEventListener("click", function () {
  if (player1Points > player2Points) {
    document.querySelector(".dicee").innerHTML = "Player 1 wins";
  } else if (player2Points > player1Points) {
    document.querySelector(".dicee").innerHTML = "Player 2 wins";
  } else {
    document.querySelector(".dicee").innerHTML = "Draw";
  }
});
