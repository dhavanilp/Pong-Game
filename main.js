let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

function drawStart() {
  ctx.ctxfillStyle = "rgb(255,255,255";
  ctx.fillRect(400, 0, 10, 30);
}
