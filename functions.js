function drawStart() {
  drawMainComponents();
  // Draw Starting Text
  ctx.font = "40px Consolas";
  ctx.fillText("PRESS SPACE TO START", 205, 100);
  ctx.font = " 30px Consolas";
  ctx.fillText("PLAYER 1", 75, 375);
  ctx.fillText("PLAYER 2", 710, 375);
}

function runGame() {
  drawMainComponents();
  moveBall();
}

function moveBall() {
  ball.x += ball.speed;

  drawMainComponents();
  // Draw Ball
  ctx.fillRect(ball.x, ball.y, ball.w, ball.h);
  console.log(ball.x);
}

function drawMainComponents() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw plpayer rectangle 1(right)
  ctx.fillStyle = "white";
  ctx.fillRect(875, player2Y, 15, 120);

  // Draw plpayer rectangle 2(left)
  ctx.fillStyle = "white";
  ctx.fillRect(50, 300, 15, 120);

  // Draw middle line
  for (let y = 0; y <= 700; y += 40) {
    ctx.fillStyle = "white";

    ctx.fillRect(450, y, 10, 30);
  }
}
addEventListener("mousemove", movePLayer2Rect);

function movePLayer2Rect(event) {
  console.log(event);
  player2Y = event.y;
}
