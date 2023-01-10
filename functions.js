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
  addEventListener("mousemove", movePLayer2Rect);
  addEventListener("keydown", player1KeyDown);
  addEventListener("keyup", player1KeyUp);
  if (keySPressed) {
    player1Y += 10;
  } else if (keyWPressed) {
    player1Y -= 10;
  }
}

function moveBall() {
  ball.x += ball.speed;

  drawMainComponents();
  // Draw Ball
  ctx.fillRect(ball.x, ball.y, ball.w, ball.h);
}

function drawMainComponents() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw plpayer rectangle 1(left)
  ctx.fillStyle = "white";
  ctx.fillRect(15, player1Y, 15, 120);

  // Draw plpayer rectangle 2(right)
  ctx.fillStyle = "white";
  ctx.fillRect(875, player2Y, 15, 120);

  // Draw middle line
  for (let y = 0; y <= 700; y += 40) {
    ctx.fillStyle = "white";

    ctx.fillRect(450, y, 10, 30);
  }
}

function movePLayer2Rect(event) {
  player2Y = event.y;
}

function player1KeyDown(event) {
  // KeyIsPressed Movement

  if (event.code === "KeyS") {
    keySPressed = true;
  } else if (event.code === "KeyW") {
    keyWPressed = true;
  }
}
function player1KeyUp(event) {
  console.log(event);
  if (event.code === "KeyS") {
    keySPressed = false;
  } else if (event.code === "KeyW") {
    keyWPressed = false;
  }
}

function detectBallCollision() {
  if (
    ball.x + ball.w > 875 &&
    ball.x < 890 &&
    ball.y + ball.h > player2Y &&
    ball.y < player2Y + 120
  ) {
    ball.x -= ball.speed;
  }
}
