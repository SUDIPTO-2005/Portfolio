"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops with mouse)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHover = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable =
        target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer, .glow-card");
      setIsHovered(!!isClickable);
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      setTrailingPos({ x: trailX, y: trailY });
      animId = requestAnimationFrame(animateTrail);
    };

    animId = requestAnimationFrame(animateTrail);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary sharp cursor dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#16f2b3] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#16f2b3]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicked ? 0.7 : 1
          })`,
          transition: "transform 0.05s ease-out, opacity 0.2s ease",
        }}
      />

      {/* Trailing luminous cyber ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-12 h-12 border-pink-500/80 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.4)] scale-110"
            : "w-8 h-8 border-[#16f2b3]/50 bg-[#16f2b3]/5 shadow-[0_0_12px_rgba(22,242,179,0.3)]"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicked ? 0.8 : 1
          })`,
        }}
      />
    </div>
  );
}
