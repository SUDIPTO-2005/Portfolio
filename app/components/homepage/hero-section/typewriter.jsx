"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Problem Solver",
  "Software Developer",
  "Programmer",
];

export default function Typewriter({ defaultText = "Aspiring Software Engineer" }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === fullText) {
          // Pause before deleting
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <span className="inline-block relative">
      <span className="text-[#16f2b3] font-bold glow-text-cyan">
        {displayText || defaultText}
      </span>
      <span className="inline-block w-[3px] h-6 lg:h-8 bg-pink-500 ml-1 translate-y-1 animate-pulse" />
    </span>
  );
}
