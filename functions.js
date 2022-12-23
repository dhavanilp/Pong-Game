function drawStart() {
  drawMainComponents();
  // Draw Starting Text
  ctx.font = "40px Consolas";
  ctx.fillText("PRESS SPACE TO START", 205, 350);
}

function runGame() {
  drawMainComponents();
  moveBall();
  movePlayerRect();
}

function drawMainComponents() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw plpayer rectangle(right)
  ctx.fillStyle = "white";
  ctx.fillRect(850, 300, 15, 120);

  // Draw plpayer rectangle(left)
  ctx.fillStyle = "white";
  ctx.fillRect(50, 300, 15, 120);

  // Draw middle line
  for (let y = 0; y <= 700; y += 40) {
    ctx.fillStyle = "white";
    ctx.fillRect(450, y, 10, 30);
    // Draw Ball
    ctx.fillRect(ball.x, ball.y, ball.w, ball.h);
  }
}

function moveBall() {
  ball.x += ball.speed;

  drawMainComponents();
  console.log(ball.x);
}
function movePlayerRect() {}
