let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

let state = "start";
function drawStart() {
  // Draw plpayer rectangle(right)
  ctx.fillStyle = "white";
  ctx.fillRect(850, 350, 15, 120);
  // Draw plpayer rectangle(left)
  ctx.fillStyle = "white";
  ctx.fillRect(50, 350, 15, 120);
  // Draw Starting Text
  ctx.font = "40px Consolas";
  ctx.fillText("PRESS SPACE TO START", 205, 350);
  // Draw middle line
  for (let y = 0; y <= 700; y += 40) {
    ctx.fillStyle = "white";
    ctx.fillRect(450, y, 10, 30);
  }
}
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

function spaceKeyDown() {
  state = "gameOn";
}
