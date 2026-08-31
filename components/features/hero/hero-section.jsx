"use client";

import { personalData } from "@/data/personal.data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiSparklingFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import CodeTerminal from "./code-terminal";
import Typewriter from "./typewriter";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 sm:py-8 lg:py-16">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-70 animate-pulse-glow pointer-events-none"
        priority
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 sm:gap-y-10 w-full">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-1 sm:p-2 pb-6 sm:pb-8 lg:pt-6">
          {/* Futuristic Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 to-pink-500/20 border border-violet-500/30 text-[11px] sm:text-xs font-mono text-violet-300 mb-4 sm:mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <RiSparklingFill className="text-[#16f2b3] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Welcome to my digital universe</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-tight sm:leading-10 lg:leading-[3.7rem] text-white">
            Hello, World! <br />
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-[#16f2b3] glow-text-pink">
              {personalData.name}
            </span>
            <br />
            <span className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-300 block mt-1">
              Passionate{" "}
              <Typewriter defaultText={personalData.designation} />
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            I build modern web applications and intelligent digital solutions with a focus on clean code, performance, and real-world problem solving.
          </p>

          {/* Social Icons */}
          <div className="my-6 sm:my-8 flex items-center gap-3 sm:gap-4 flex-wrap">
            {[
              { icon: <BsGithub size={20} />, href: personalData.github, label: "GitHub" },
              { icon: <BsLinkedin size={20} />, href: personalData.linkedIn, label: "LinkedIn" },
              { icon: <SiLeetcode size={20} />, href: personalData.leetcode || "#", label: "LeetCode" },
              { icon: <BsInstagram size={20} />, href: personalData.instagram || "#", label: "Instagram" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                title={social.label}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#16f2b3] hover:border-[#16f2b3]/60 hover:bg-[#16f2b3]/10 hover:shadow-[0_0_20px_rgba(22,242,179,0.3)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md active:scale-95"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="#contact"
              className="relative group p-[1.5px] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 text-center"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-[#16f2b3] animate-gradient-flow rounded-full" />
              <button className="relative w-full px-6 sm:px-8 py-3 sm:py-3.5 bg-[#080c1b] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 group-hover:bg-opacity-80 flex items-center justify-center gap-2">
                <span>Contact Me</span>
                <RiContactsFill size={16} className="text-[#16f2b3] group-hover:rotate-12 transition-transform" />
              </button>
            </Link>

            <Link
              className="shimmer-effect flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
              role="button"
              target="_blank"
              href={personalData.resume}
              download="SUDIPTO_BHADRA_Resume.pdf"
            >
              <span>Get Resume</span>
              <MdDownload size={18} className="animate-bounce" />
            </Link>
          </div>
        </div>

        {/* 3D Tilt Code Terminal */}
        <div className="order-1 lg:order-2 w-full max-w-full overflow-hidden">
          <CodeTerminal />
        </div>
      </div>
    </section>
  );
}
