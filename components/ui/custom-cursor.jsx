"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const timer = setTimeout(() => setIsVisible(true), 50);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer");

      setIsPointer(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    const follow = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(follow);
    };
    animationFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small exact dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          marginTop: "-4px",
          marginLeft: "-4px",
        }}
      >
        <div
          className={`rounded-full bg-[#16f2b3] transition-all duration-150 ${
            isPointer ? "w-3 h-3 bg-pink-500 scale-125" : "w-2 h-2"
          }`}
          style={{
            boxShadow: isPointer
              ? "0 0 12px rgba(236, 72, 153, 0.8)"
              : "0 0 10px rgba(22, 242, 179, 0.8)",
          }}
        />
      </div>

      {/* Smooth trailing glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)`,
          marginTop: isPointer ? "-20px" : "-16px",
          marginLeft: isPointer ? "-20px" : "-16px",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isPointer
              ? "w-10 h-10 border-pink-500/80 bg-pink-500/10 scale-110"
              : "w-8 h-8 border-[#16f2b3]/50 bg-[#16f2b3]/5"
          }`}
          style={{
            backdropFilter: "blur(0.5px)",
          }}
        />
      </div>
    </>
  );
}
