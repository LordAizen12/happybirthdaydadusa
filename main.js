// Fireworks and confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createConfetti() {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * -3 - 1,
      life: 100
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) particles.splice(index, 1);
  });
}

function loop() {
  if (Math.random() < 0.2) createConfetti();
  drawParticles();
  requestAnimationFrame(loop);
}
loop();

// Resize canvas on window change
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});// Music play button functionality
const playButton = document.getElementById("playButton");
const music = document.getElementById("backgroundMusic");

playButton.addEventListener("click", () => {
  music.play();
  playButton.style.display = "none"; // Hide button after music starts
});
