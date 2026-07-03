import { useEffect, useRef } from "react";

export default function AnimatedConnections({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const PARTICLE_COUNT = 100;
    const MAX_DISTANCE = 130;
    const MOUSE_RADIUS = 180;
    const SPEED = 0.18;

    let particles = [];
    const mouse = {
      x: null,
      y: null,
    };

    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Scale the backing store for crisp rendering on high-DPI screens,
      // while keeping our math in CSS pixel space.
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        radius: Math.random() * 2 + 1.5,
      }));
    }

    function animate() {
      const { width, height } = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, width, height);

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001;

          if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;

            p.vx += (dx / dist) * force * 0.08;
            p.vy += (dy / dist) * force * 0.08;
          }
        }

        // Apply gentle friction so particles slow back down
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Keep velocity under control
        const maxSpeed = SPEED * 3;

        p.vx = Math.max(-maxSpeed, Math.min(maxSpeed, p.vx));
        p.vy = Math.max(-maxSpeed, Math.min(maxSpeed, p.vy));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(194,84,45,0.75)";
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_DISTANCE) {
            const alpha = (1 - distance / MAX_DISTANCE) * 0.18;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(194,84,45,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    }

    // The canvas has pointer-events-none (so it doesn't block clicks on
    // content behind it), which means it can never receive mouse events
    // directly. Instead we listen on the window and translate the
    // coordinates into the canvas's local space ourselves.
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only track the mouse while it's actually over the canvas's area;
      // otherwise leave mouse.x/y as null so repulsion turns off.
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}