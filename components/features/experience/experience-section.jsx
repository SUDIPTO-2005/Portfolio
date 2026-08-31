"use client";

import { experiences } from "@/data/experience.data";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experienceLottie from '@/app/assets/lottie/code.json';
import AnimationLottie from "@/components/ui/animation-lottie";
import GlowCard from "@/components/ui/glow-card";
import Reveal from "@/components/ui/reveal";

export default function ExperienceSection() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 sm:my-16 lg:my-28 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-70 pointer-events-none"
        priority
      />

      <Reveal direction="down">
        <div className="flex justify-center my-6 lg:py-8">
          <div className="flex items-center">
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 sm:p-2.5 px-4 sm:px-6 text-base sm:text-xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)] font-semibold tracking-wider">
              EXPERIENCE
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      <div className="py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <Reveal direction="right">
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px] filter drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <AnimationLottie animationPath={experienceLottie} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="flex flex-col gap-4 sm:gap-6">
              {experiences.map(exp => (
                <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                  <div className="p-4 sm:p-5 relative bg-[#0b0f24]/90 rounded-xl">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-60 pointer-events-none"
                    />
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-mono bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/30">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-start gap-x-3 sm:gap-x-5 py-1 sm:py-2">
                      <div className="text-violet-400 p-2.5 sm:p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-110 hover:text-[#16f2b3] flex-shrink-0">
                        <BsPersonWorkspace size={22} className="sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 tracking-wide">
                          {exp.title}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
