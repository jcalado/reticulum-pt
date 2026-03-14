// ─── MESH BACKGROUND ───
const canvas = document.getElementById('mesh-bg');
const ctx = canvas.getContext('2d');
let nodes = [];
let mouse = { x: -1000, y: -1000 };
const NODE_COUNT = window.innerWidth < 768 ? 35 : 60;
const CONNECT_DIST = 180;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
const MOUSE_DIST = 250;
const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;
let animId = null;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

for (let i = 0; i < NODE_COUNT; i++) {
  nodes.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 1
  });
}

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function drawMesh() {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;
  }

  ctx.lineWidth = 0.5;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distSq = dx * dx + dy * dy;
      if (distSq < CONNECT_DIST_SQ) {
        const alpha = (1 - Math.sqrt(distSq) / CONNECT_DIST) * 0.3;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 229, 160, ${alpha})`;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  const mx = mouse.x;
  const my = mouse.y;
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const dx = n.x - mx;
    const dy = n.y - my;
    const distSq = dx * dx + dy * dy;
    let glow = 0;
    if (distSq < MOUSE_DIST_SQ) {
      glow = (1 - Math.sqrt(distSq) / MOUSE_DIST) * 0.8;
    }

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 229, 160, ${0.4 + glow * 0.6})`;
    ctx.fill();

    if (glow > 0.1) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 160, ${glow * 0.2})`;
      ctx.fill();
    }
  }

  animId = requestAnimationFrame(drawMesh);
}

// Pause animation when tab is hidden to save CPU/battery
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  } else if (!animId) {
    drawMesh();
  }
});

drawMesh();

// ─── MOBILE NAV ───
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ─── HARDWARE LIGHTBOX ───
const lightbox = document.getElementById('hw-lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxLabel = lightbox.querySelector('.hw-lightbox-label');

document.querySelectorAll('.hw-thumb').forEach(img => {
  img.addEventListener('click', e => {
    e.stopPropagation();
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxLabel.textContent = img.alt;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('active');
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── STAGGERED REVEALS ───
const staggerObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const children = e.target.querySelectorAll('.feature-card, .step, .hw-card, .app-card-h, .community-link');
      children.forEach((child, i) => {
        child.style.transitionDelay = `${i * 0.08}s`;
        child.classList.add('stagger-visible');
      });
      staggerObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.features-grid, .steps, .hw-grid, .apps-list, .apps-scroll, .community-links').forEach(el => staggerObserver.observe(el));
