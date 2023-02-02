let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

let playerRectHeight = 120;
let playerRectWidth = 15;
let ball;

let player2Y;
let player1Y;
let player2X = 875;
let player1X = 15;

let keySPressed = false;
let keyWPressed = false;
let arrowUpKeyPressed = false;
let arrowDownKeyPressed = false;

let state = "start";

let player1Score;
let player2Score;

reset();

window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameOn") {
    runGame();
  } else if (state === "gameover") {
    drawGameOver();
  }

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", spaceKeyDown);

function spaceKeyDown(event) {
  if (event.code === "Space") {
    state = "gameOn";
  }
}
