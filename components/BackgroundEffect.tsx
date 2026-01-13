
import React, { useEffect, useRef } from 'react';

interface BackgroundEffectProps {
  isDarkMode: boolean;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let orbs: Orb[] = [];
    const particleCount = 120; // Increased density
    const orbCount = 5;
    const connectionDistance = 200;
    const mouseRadius = 300;
    let time = 0;

    class Orb {
      x: number; y: number; radius: number; vx: number; vy: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.radius = Math.random() * 400 + 300;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
      }
      update(w: number, h: number) {
        this.x += this.vx; this.y += this.vy;
        if (this.x < -this.radius) this.x = w + this.radius;
        if (this.x > w + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = h + this.radius;
        if (this.y > h + this.radius) this.y = -this.radius;
      }
      draw() {
        if (!ctx) return;
        // Light mode uses pink/rose, dark mode uses purple
        const color = isDarkMode ? '139, 92, 246' : '219, 39, 119';
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${color}, ${isDarkMode ? '0.05' : '0.08'})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number; angle: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }
      update(w: number, h: number) {
        this.x += this.vx; this.y += this.vy;
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius;
            this.x -= (dx / distance) * force * 2;
            this.y -= (dy / distance) * force * 2;
          }
        }
        if (this.x < 0) this.x = w; if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h; if (this.y > h) this.y = 0;
      }
      draw() {
        if (!ctx) return;
        const pulse = Math.sin(time * 0.04 + this.x * 0.01) * 0.5 + 0.5;
        const color = isDarkMode ? '255, 255, 255' : '219, 39, 119';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${isDarkMode ? 0.1 + pulse * 0.15 : 0.2 + pulse * 0.2})`;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
      orbs = Array.from({ length: orbCount }, () => new Orb(canvas.width, canvas.height));
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = isDarkMode ? '255, 255, 255' : '219, 39, 119';
      orbs.forEach(o => { o.update(canvas.width, canvas.height); o.draw(); });
      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height); p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x, dy = p.y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - (dist / connectionDistance)) * (isDarkMode ? 0.15 : 0.25);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', (e) => { mouseRef.current = { x: e.clientX, y: e.clientY, active: true }; });
    window.addEventListener('mouseleave', () => { mouseRef.current.active = false; });
    window.addEventListener('resize', init);
    init(); animate();
    return () => { window.removeEventListener('resize', init); cancelAnimationFrame(animationFrameId); };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 1 }} />;
};

export default BackgroundEffect;
