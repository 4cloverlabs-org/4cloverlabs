"use client";

import React, { useEffect, useRef } from "react";

export default function AsciiWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    // Characters used in the reference image, ordered by visual density/elevation
    const CHARS = [" ", ".", ":", "*", "!", "(", "%", "@", "&", "^"];
    const CHAR_WIDTH = 7;
    const CHAR_HEIGHT = 11;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      // Match parent size
      width = parent.clientWidth;
      height = parent.clientHeight;

      // Adjust for device pixel ratio for sharp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      ctx.font = "9px monospace";
      ctx.textBaseline = "top";

      cols = Math.ceil(width / CHAR_WIDTH);
      rows = Math.ceil(height / CHAR_HEIGHT);
    };

    // Initialize dimensions
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      t += 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CHAR_WIDTH;
          const y = r * CHAR_HEIGHT;

          // Normalized coords for the wave functions
          const nx = c * 0.04;
          const ny = r * 0.08;

          // Compute complex undulating waves
          const wave1 = Math.sin(nx - t * 0.015) * Math.cos(ny + t * 0.01);
          const wave2 = Math.sin(nx * 1.5 + ny * 0.6 + t * 0.02) * 0.5;
          const wave3 = Math.cos(nx * 0.5 - ny * 1.2 - t * 0.008) * 0.3;

          // Combine waves and normalize to 0..1
          let val = (wave1 + wave2 + wave3 + 1.8) / 3.6;

          // Clamp val to [0, 1]
          val = Math.max(0, Math.min(1, val));

          // Get corresponding character
          const charIndex = Math.floor(val * (CHARS.length - 1));
          const char = CHARS[charIndex];

          // Vary opacity based on wave height for a 3D depth effect
          // Increased brightness to make it pop more
          const opacity = 0.12 + val * 0.48;

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fillText(char, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-overlay"
      style={{ opacity: 1.0 }}
    />
  );
}
