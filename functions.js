function drawStart() {
  drawMainComponents();
  // Draw Starting Text
  ctx.font = "40px Consolas";
  ctx.fillText("PRESS SPACE TO START", 205, 300);
  ctx.font = " 30px Consolas";
  ctx.fillText("PLAYER 1", 75, 375);
  ctx.fillText("PLAYER 2", 710, 375);

  ctx.font = "50px Consolas";
  ctx.fillText(`${player2Score}`, 650, 100);
  ctx.fillText(`${player1Score}`, 250, 100);
}

function runGame() {
  drawMainComponents();
  moveBall();
  detectBallCollision();
  addEventListener("keyup", player2KeyUp);
  addEventListener("keydown", player2KeyDown);
  addEventListener("keydown", player1KeyDown);
  addEventListener("keyup", player1KeyUp);
  if (keySPressed) {
    player1Y += 10;
  } else if (keyWPressed) {
    player1Y -= 10;
  }
  if (arrowDownKeyPressed) {
    player2Y += 10;
  } else if (arrowUpKeyPressed) {
    player2Y -= 10;
  }
  if (ball.x > cnv.width || ball.x < 0) {
    pointAdded();
  }
}

function moveBall() {
  ball.x += ball.Xspeed;
  ball.y += ball.Yspeed;

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

function player1KeyDown(event) {
  // KeyIsPressed Movement

  if (event.code === "KeyS") {
    keySPressed = true;
  } else if (event.code === "KeyW") {
    keyWPressed = true;
  }
}
function player1KeyUp(event) {
  if (event.code === "KeyS") {
    keySPressed = false;
  } else if (event.code === "KeyW") {
    keyWPressed = false;
  }
}
function player2KeyUp(event) {
  if (event.code === "ArrowUp") {
    arrowUpKeyPressed = false;
  } else if (event.code === "ArrowDown") {
    arrowDownKeyPressed = false;
  }
}
function player2KeyDown(event) {
  if (event.code === "ArrowUp") {
    arrowUpKeyPressed = true;
  } else if (event.code === "ArrowDown") {
    arrowDownKeyPressed = true;
  }
}

function detectBallCollision() {
  if (
    ball.x < player2X + playerRectWidth &&
    ball.x + ball.w > player2X &&
    ball.y < player2Y + playerRectHeight &&
    ball.y + ball.h > player2Y
  ) {
    ball.Xspeed = -4;
  } else if (
    ball.x < player1X + playerRectWidth &&
    ball.x + ball.w > player1X &&
    ball.y < player1Y + playerRectHeight &&
    ball.y + ball.h > player1Y
  ) {
    ball.Xspeed = 4;
  }

  if (ball.y + ball.h > cnv.height || ball.y < 0) {
    ball.Yspeed *= -1;
  }
}

function pointAdded() {
  if (ball.x > cnv.width) {
    player1Score += 1;
  } else if (ball.x + ball.w < 0) {
    player2Score += 1;
  }
  if (player1Score >= 7 || player2Score >= 7) {
    gameOver();
  }
}

function gameOver() {
  setTimeout(reset, 2000);
}
function reset() {
  state = "start";

  ball = {
    x: 450,
    y: 370,
    w: 15,
    h: 15,
    Xspeed: 4,
    Yspeed: Math.random() * 10,
    accel: 0.1,
  };

  player1Score = 0;
  player2Score = 0;
}
