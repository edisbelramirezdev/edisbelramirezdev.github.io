/* ==================== PARTÍCULAS TECNOLÓGICAS ==================== */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let width, height;

  const CONFIG = {
    particleColor: 'rgba(0, 168, 255, 0.7)',
    lineColor: 'rgba(0, 168, 255, 0.15)',
    lineColorHover: 'rgba(0, 168, 255, 0.4)',
    particleRadius: 1.8,
    linkDistance: 130,
    speed: 0.35,
    mouseRadius: 150,
    maxParticles: 120,
    minParticles: 30
  };

  const mouse = { x: null, y: null, radius: CONFIG.mouseRadius };

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const area = width * height;
    const count = Math.min(
      CONFIG.maxParticles,
      Math.max(CONFIG.minParticles, Math.floor(area / 12000))
    );
    createParticles(count);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * CONFIG.speed + 0.1;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = Math.random() * CONFIG.particleRadius + 0.5;
      this.baseAlpha = Math.random() * 0.5 + 0.4;
      this.alpha = this.baseAlpha;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.2;
          this.y -= (dy / dist) * force * 1.2;
          this.alpha = Math.min(1, this.baseAlpha + force * 0.5);
        } else {
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 168, 255, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(0, 168, 255, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < CONFIG.linkDistance) {
          const opacity = (1 - dist / CONFIG.linkDistance) * 0.5;

          let color = `rgba(0, 168, 255, ${opacity.toFixed(2)})`;
          if (mouse.x !== null) {
            const mx = (particles[i].x + particles[j].x) / 2;
            const my = (particles[i].y + particles[j].y) / 2;
            const mDist = Math.hypot(mouse.x - mx, mouse.y - my);
            if (mDist < mouse.radius) {
              color = `rgba(0, 168, 255, ${(opacity * 2).toFixed(2)})`;
            }
          }

          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    resize();
    animate();
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    mouse.x = touch.clientX - rect.left;
    mouse.y = touch.clientY - rect.top;
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    mouse.x = null;
    mouse.y = null;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

  resize();
  animate();
})();