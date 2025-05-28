const canvas = document.getElementById("serp-canvas");
const ctx = canvas.getContext("2d");

const vertices = [
  { x: canvas.width / 2, y: 20 },
  { x: 20, y: canvas.height - 20 },
  { x: canvas.width - 20, y: canvas.height - 20 }
];

ctx.fillStyle = "blue";
vertices.forEach(v => {
  ctx.beginPath();
  ctx.arc(v.x, v.y, 3, 0, Math.PI * 2);
  ctx.fill();
});

let currentPoint = { x: 600, y: 600 };

function drawPoint(x, y) {
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 0.5, 0.5);
}

let count = 0;
const POINTS_AMOUNT = 10000000;
const POINTS_PER_FRAME = 100;

function animate() {
  for (let i = 0; i < POINTS_PER_FRAME; i++) {
    const target = vertices[Math.floor(Math.random() * 3)];

    currentPoint = {
      x: (currentPoint.x + target.x) / 2,
      y: (currentPoint.y + target.y) / 2
    };

    drawPoint(currentPoint.x, currentPoint.y);
    count++;

    if (count >= POINTS_AMOUNT) return;
  }
  requestAnimationFrame(animate);
}

animate();
