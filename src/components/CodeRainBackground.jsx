import { useEffect, useRef } from "react";

// A subtle "falling code" animation — code symbols drifting down faintly
// behind content. Purely decorative (aria-hidden, pointer-events none).
const CHARS = "{}[]()<>/;=+-*01constletfnreturnasyncawait=>".split("");

export default function CodeRainBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let columns = [];
    const fontSize = 20;

    function setup() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      const columnCount = Math.floor(width / fontSize);
      columns = new Array(columnCount).fill(0).map(() => Math.random() * -height);
    }

    function draw() {
      const { width, height } = canvas;
      // fade previous frame slightly instead of clearing, for a soft trailing effect
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      columns.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;

        // getComputedStyle reads the live --color-accent-ish value isn't set up as a var,
        // so we use a fixed warm terracotta with low opacity — matches the theme either way.
        ctx.fillStyle = "rgba(194, 84, 45, 0.16)"; // terracotta, low opacity
        ctx.fillText(char, x, y);

        columns[i] = y > height ? 0 : y +3;
      });

      animationId = requestAnimationFrame(draw);
    }

    setup();
    draw();
    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setup);
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
