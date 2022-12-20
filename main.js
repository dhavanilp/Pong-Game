let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(850, 350, 15, 70);

function drawStart() {
  // Draw middle line
  for (let y = 0; y <= 700; y += 40) {
    ctx.fillStyle = "white";
    ctx.fillRect(450, y, 10, 30);
  }
}
drawStart();
