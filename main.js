let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

let state = "start";

let ball = {
  x: 400,
  y: 370,
  w: 20,
  h: 20,
  speed: 4,
  accel: 0.1,
};

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
