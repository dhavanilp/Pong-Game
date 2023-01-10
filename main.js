let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

let state = "start";

let ball = {
  x: 450,
  y: 370,
  w: 15,
  h: 15,
  speed: 4,
  accel: 0.1,
};

let keySPressed = false;
let keyWPressed = false;

let player2Y = 350;
let player1Y = 350;
let player1X = 15;

let playerRectHeight = 120;

let playerRectWidth = 15;
let player2X = 875;

window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
  } else if (state === "gameOn") {
    runGame();
  }

  requestAnimationFrame(draw);
}

document.addEventListener("keydown", spaceKeyDown);

function spaceKeyDown(event) {
  if (event.code === "Space") {
    state = "gameOn";
  }
}
