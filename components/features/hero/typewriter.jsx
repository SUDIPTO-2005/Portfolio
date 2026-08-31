"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "AI & ML Developer",
  "Full-Stack Builder",
  "Problem Solver",
];

export default function Typewriter({ defaultText = "Software Engineer" }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 150);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="inline-block text-[#16f2b3] glow-text-cyan">
      {text || defaultText}
      <span className="animate-pulse ml-0.5 text-pink-500 font-normal">|</span>
    </span>
  );
}
