"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 150,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Particle setup
    const particleCount = Math.min(Math.floor((width * height) / 14000), 100);
    const particles = [];
    const colors = [
      "rgba(22, 242, 179, ",
      "rgba(139, 92, 246, ",
      "rgba(236, 72, 153, ",
      "rgba(59, 130, 246, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 0.8,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle interactive spotlight around mouse
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        350
      );
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.08)");
      gradient.addColorStop(0.5, "rgba(22, 242, 179, 0.03)");
      gradient.addColorStop(1, "rgba(8, 12, 27, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Particle pulse
        const currentAlpha =
          p.alpha + Math.sin(frame * p.pulseSpeed) * 0.15;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${Math.max(0.1, currentAlpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.colorBase}0.8)`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 110) * 0.18;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          const mAlpha = (1 - mDist / mouse.radius) * 0.35;
          ctx.strokeStyle = `rgba(22, 242, 179, ${mAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Futuristic Aurora Glow Ambient Blobs */}
      <div className="absolute top-[10%] left-[15%] w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] animate-float-slow" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[130px] animate-float" />
      <div className="absolute bottom-[15%] left-[25%] w-[500px] h-[500px] bg-[#16f2b3]/5 rounded-full blur-[150px] animate-pulse-glow" />
    </div>
  );
}
