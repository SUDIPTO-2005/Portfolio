"use client";

import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "PROJECTS", href: "/#projects" },
    { label: "EDUCATION", href: "/#education" },
    { label: "ACHIEVEMENTS", href: "/#achievements" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <header className="relative w-full py-4 sm:py-6 bg-transparent z-40">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-1 text-xl sm:text-2xl md:text-3xl font-black tracking-tight"
        >
          <span className="text-pink-500 group-hover:-translate-x-1 transition-transform">
            &lt;
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] to-violet-400 group-hover:glow-text-cyan transition-all">
            SUDIPTO
          </span>
          <span className="text-white">.DEV</span>
          <span className="text-pink-500 group-hover:translate-x-1 transition-transform">
            /&gt;
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wider text-gray-300 hover:text-[#16f2b3] transition-colors duration-300 rounded-full hover:bg-white/[0.04] group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-[#16f2b3] -translate-x-1/2 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>
          ))}

          <Link
            href="/#contact"
            className="ml-2 lg:ml-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Action Button */}
        <Link
          href="/#contact"
          className="md:hidden px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-violet-600 to-pink-500 text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] active:scale-95 transition-all duration-300"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
}