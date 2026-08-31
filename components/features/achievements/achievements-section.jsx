"use client";

import { achievements } from "@/data/achievements.data";
import { BsAwardFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "@/components/ui/glow-card";
import Reveal from "@/components/ui/reveal";

export default function AchievementsSection() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 sm:my-16 lg:my-28 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <Reveal direction="down">
        <div className="flex justify-center my-6 lg:py-8">
          <div className="flex items-center">
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 sm:p-2.5 px-4 sm:px-6 text-sm sm:text-base md:text-xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)] font-semibold tracking-wider text-center">
              HONORS &amp; CERTIFICATIONS
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
        {achievements.map((item, idx) => (
          <Reveal key={item.id} direction="up" delay={idx * 80}>
            <GlowCard identifier={`achievement-${item.id}`}>
              <div className="p-4 sm:p-6 bg-[#0b0f24]/90 rounded-xl relative h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-violet-600/20 text-[#16f2b3] border border-[#16f2b3]/30">
                      {item.badge}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 my-2">
                    <div className="p-2 sm:p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 group-hover:scale-110 group-hover:text-[#16f2b3] group-hover:border-[#16f2b3]/40 transition-all duration-300 flex-shrink-0">
                      <BsAwardFill size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#16f2b3] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-violet-300 font-medium mt-0.5">
                        {item.issuer} • <span className="text-gray-400 font-normal">{item.tag}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2.5 sm:mt-3">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#16f2b3] hover:underline"
                    >
                      <span>Verify Credential</span>
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
