"use client";

import { achievements } from "@/utils/data/achievements";
import Image from "next/image";
import { BsPatchCheckFill, BsStars, BsTrophyFill } from "react-icons/bs";
import { FaAward, FaMedal } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../helper/reveal";

const getAchievementIcon = (index) => {
  switch (index % 4) {
    case 0:
      return <BsTrophyFill className="text-amber-400" size={24} />;
    case 1:
      return <BsPatchCheckFill className="text-[#16f2b3]" size={24} />;
    case 2:
      return <FaAward className="text-sky-400" size={24} />;
    case 3:
    default:
      return <FaMedal className="text-pink-400" size={24} />;
  }
};

export default function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 sm:my-16 lg:my-28 border-[#25213b]">
      {/* Background Section Glow */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-70 pointer-events-none"
        priority
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <Reveal direction="down">
        <div className="flex justify-center my-6 lg:py-8">
          <div className="flex items-center">
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 sm:p-2.5 px-4 sm:px-6 text-sm sm:text-base md:text-xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)] font-semibold tracking-wider flex items-center gap-2">
              <BsStars className="text-[#16f2b3]" />
              <span>ACHIEVEMENTS</span>
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      <div className="py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {achievements.map((item, index) => (
            <Reveal key={item.id || index} direction="up" delay={index * 100}>
              <GlowCard identifier={`achievement-${item.id || index}`}>
                <div className="p-4 sm:p-6 relative bg-[#0b0f24]/90 rounded-2xl border border-white/5 h-full flex flex-col justify-between group hover:border-[#16f2b3]/40 transition-all duration-300">
                  <Image
                    src="/blur-23.svg"
                    alt="Background blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-40 pointer-events-none"
                  />

                  <div>
                    {/* Header Row: Date & Issuer/Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30">
                        {item.date}
                      </span>
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-300 border border-violet-500/30">
                        {item.issuer}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 shadow-[0_0_15px_rgba(22,242,179,0.15)] group-hover:scale-110 group-hover:border-[#16f2b3]/50 transition-all duration-300 flex-shrink-0">
                        {getAchievementIcon(index)}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#16f2b3] transition-colors duration-200 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-semibold text-violet-400 mt-0.5 sm:mt-1">
                          {item.badge}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-4 sm:mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 bg-white/[0.03] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border border-white/5">
                      {item.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#16f2b3] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Verified ✓
                    </span>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
