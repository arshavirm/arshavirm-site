(function() {
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#00ff41');
  gradient.addColorStop(0.5, '#00cc33');
  gradient.addColorStop(1, '#006622');
  ctx.fillStyle = gradient;
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.shadowColor = '#00ff41';
    ctx.shadowBlur = 8;
    ctx.fillText(text, x, y);
    ctx.shadowBlur = 0;

    if (y > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 40);

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  const newColumns = Math.floor(width / fontSize);
  if (newColumns > drops.length) {
    for (let i = drops.length; i < newColumns; i++) {
      drops[i] = Math.floor(Math.random() * height / fontSize);
    }
  }
  drops.length = newColumns;
});
})();

console.log(
    '%c Arshavir Mirzakhani ',
    'background: #00ff41; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Terminal vibe activated. ', 'color: #00ff41; font-size: 14px;');
console.log(
    '%c 👾 https://github.com/arshavirm', 'color: #00aa33; font-size: 12px;');