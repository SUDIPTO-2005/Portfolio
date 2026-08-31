"use client";

import { useState } from "react";
import { FaCheck, FaCopy, FaTerminal } from "react-icons/fa";
import TiltCard from "../../helper/tilt-card";

export default function CodeBlock() {
  const [copied, setCopied] = useState(false);

  const codeString = `class Developer {
  name: 'SUDIPTO BHADRA',
  skills: ['Python', 'FastAPI', 'Django', 'React', 'Next.js', 'Machine Learning', 'SQL', 'Docker', 'Git'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  }
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TiltCard maxTilt={6} className="w-full rounded-xl">
      <div className="relative w-full rounded-xl border border-violet-500/30 bg-[#0b0f24]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden group">
        {/* Animated Laser Border Beam Top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-pink-500 animate-gradient-flow" />

        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d122b]/80 border-b border-violet-900/40 gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500/90 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
            <span className="ml-2 text-[11px] sm:text-xs font-mono text-gray-400 flex items-center gap-1.5 hidden xs:flex sm:flex">
              <FaTerminal size={10} className="text-[#16f2b3]" />
              developer.ts
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-[11px] text-emerald-400 font-mono">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1 text-[11px] sm:text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-all duration-200"
              title="Copy Code"
            >
              {copied ? (
                <>
                  <FaCheck className="text-[#16f2b3]" size={10} />
                  <span className="text-[#16f2b3] hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy size={10} />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-3 sm:p-4 lg:p-6 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed overflow-x-auto">
          <div>
            <span className="text-pink-500 font-bold">class </span>
            <span className="text-emerald-400 font-bold">Developer </span>
            <span className="text-gray-400">{`{`}</span>
          </div>

          <div className="pl-3 sm:pl-4 lg:pl-6 my-1">
            <span className="text-purple-400">const </span>
            <span className="text-blue-300">name </span>
            <span className="text-pink-400">= </span>
            <span className="text-amber-300">&apos;SUDIPTO BHADRA&apos;</span>
            <span className="text-gray-400">;</span>
          </div>

          <div className="pl-3 sm:pl-4 lg:pl-6 my-1">
            <span className="text-purple-400">const </span>
            <span className="text-blue-300">skills </span>
            <span className="text-pink-400">= </span>
            <span className="text-gray-400">[</span>
            <div className="pl-3 sm:pl-4 text-amber-300 flex flex-wrap gap-1 py-1">
              {["'Python'", "'FastAPI'", "'Django'", "'React'", "'Next.js'", "'Machine Learning'", "'SQL'", "'Docker'", "'Git'"].map(
                (skill, idx, arr) => (
                  <span key={idx} className="hover:text-pink-400 transition-colors cursor-default">
                    {skill}
                    {idx < arr.length - 1 && <span className="text-gray-400">,</span>}
                  </span>
                )
              )}
            </div>
            <span className="text-gray-400">];</span>
          </div>

          <div className="pl-3 sm:pl-4 lg:pl-6 my-1">
            <span className="text-purple-400">const </span>
            <span className="text-blue-300">traits </span>
            <span className="text-pink-400">= </span>
            <span className="text-gray-400">{`{`}</span>
            <div className="pl-3 sm:pl-4">
              <span className="text-blue-300">hardWorker</span>: <span className="text-orange-400">true</span>,{" "}
              <span className="text-blue-300">quickLearner</span>: <span className="text-orange-400">true</span>,{" "}
              <span className="text-blue-300">problemSolver</span>: <span className="text-orange-400">true</span>
            </div>
            <span className="text-gray-400">{`}`};</span>
          </div>

          <div className="pl-3 sm:pl-4 lg:pl-6 my-1">
            <span className="text-purple-400">isHireable</span>
            <span className="text-gray-400">() {`{`}</span>
            <div className="pl-3 sm:pl-4 text-orange-400">
              return <span className="text-white">this.traits.hardWorker</span>{" "}
              <span className="text-pink-400">&amp;&amp;</span>{" "}
              <span className="text-white">this.traits.problemSolver</span>{" "}
              <span className="text-pink-400">&amp;&amp;</span>{" "}
              <span className="text-white">this.skills.length</span>{" "}
              <span className="text-pink-400">&gt;=</span> <span className="text-orange-400">5</span>;
            </div>
            <span className="text-gray-400">{`}`}</span>
          </div>

          <div>
            <span className="text-gray-400">{`}`}</span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
