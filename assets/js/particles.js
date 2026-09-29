/* ==================== PARTÍCULAS TECNOLÓGICAS ==================== */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let width, height;

  const CONFIG = {
    particleRadius: 1,          // ← antes 1.8 (más pequeñas)
    linkDistance: 110,          // ← antes 130
    speed: 0.25,                // ← antes 0.35 (más lentas)
    maxParticles: 60,           // ← antes 120 (menos)
    minParticles: 20,           // ← antes 30
    particleOpacity: 0.6,       // ← opacidad fija más sutil
    lineOpacity: 0.12           // ← líneas más sutiles
  };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    // Usar resolución nativa (sin dpr) para evitar partículas gigantes
    canvas.width = width;
    canvas.height = height;

    const area = width * height;
    const count = Math.min(
      CONFIG.maxParticles,
      Math.max(CONFIG.minParticles, Math.floor(area / 25000))
    );
    createParticles(count);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * CONFIG.speed + 0.08;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.radius = Math.random() * CONFIG.particleRadius + 0.4;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 168, 255, ${CONFIG.particleOpacity})`;
      ctx.fill();
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
          const opacity = (1 - dist / CONFIG.linkDistance) * CONFIG.lineOpacity;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 168, 255, ${opacity.toFixed(3)})`;
          ctx.lineWidth = 0.6;
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