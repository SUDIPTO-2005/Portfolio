// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Reveal from "../../helper/reveal";
import TiltCard from "../../helper/tilt-card";
import { BsCodeSlash, BsCpu, BsRocketTakeoff, BsShieldCheck } from "react-icons/bs";

function AboutSection() {
  const highlights = [
    { icon: <BsCodeSlash className="text-[#16f2b3]" size={18} />, title: "Full-Stack Development", desc: "Building modern web applications with frontend and backend technologies" },
    { icon: <BsShieldCheck className="text-pink-500" size={18} />, title: "Problem Solving", desc: "Applying DSA and logical thinking to solve programming challenges" },
    { icon: <BsRocketTakeoff className="text-purple-400" size={18} />, title: "Continuous Learner", desc: "Exploring new technologies and improving development skills" },
    { icon: <BsCpu className="text-emerald-400" size={18} />, title: "Clean Architecture", desc: "Maintainable & modern codebase" },
  ];

  return (
    <div id="about" className="my-12 sm:my-16 lg:my-28 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-[0_0_20px_rgba(26,20,67,0.8)] border border-violet-800/40">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </div>

      <Reveal direction="up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-3">
              <p className="font-semibold text-[#16f2b3] text-xs sm:text-sm tracking-widest uppercase glow-text-cyan flex items-center gap-2">
                <span className="h-[2px] w-4 sm:w-6 bg-[#16f2b3]"></span>
                Who I am
              </p>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug">
              Transforming Ideas into <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16f2b3] via-violet-400 to-pink-500">
                High-Impact Software
              </span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
              {personalData.description}
            </p>

            {/* Quick highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-300 flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-black/40 group-hover:scale-110 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#16f2b3] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <TiltCard maxTilt={8} className="w-fit">
              <div className="relative p-1 sm:p-1.5 rounded-3xl bg-gradient-to-tr from-pink-500 via-violet-600 to-[#16f2b3] shadow-[0_0_40px_rgba(139,92,246,0.35)] group">
                <div className="relative overflow-hidden rounded-[22px] w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem] bg-[#0b0f24]">
                  <Image
                    src={personalData.profile}
                    alt={personalData.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c1b]/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutSection;