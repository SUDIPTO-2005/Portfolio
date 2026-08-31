"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "../../helper/reveal";

function Skills() {
  return (
    <div id="skills" className="relative z-40 border-t my-12 sm:my-16 lg:my-28 border-[#25213b]">
      <div className="w-[200px] h-[200px] bg-violet-600 rounded-full absolute top-6 left-1/2 -translate-x-1/2 filter blur-[120px] opacity-20 pointer-events-none"></div>

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
              SKILLS &amp; TECHNOLOGIES
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      <div className="w-full my-6 sm:my-8 overflow-hidden">
        {/* Single continuous running line marquee */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const img = skillsImage(skill);
            const imgSrc = img?.src || img || "/hero.svg";

            return (
              <div
                className="w-32 sm:w-44 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-2 sm:m-3.5 rounded-xl group relative hover:scale-105 active:scale-95 cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-xl border border-white/10 bg-[#0d122b]/90 backdrop-blur-md shadow-lg group-hover:border-[#16f2b3] group-hover:shadow-[0_0_25px_rgba(22,242,179,0.35)] transition-all duration-300">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-3.5 sm:p-5">
                    <div className="h-9 sm:h-12 w-9 sm:w-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={imgSrc}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-8 sm:h-10 w-8 sm:w-10 object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-white text-xs sm:text-sm font-medium tracking-wide group-hover:text-[#16f2b3] transition-colors whitespace-nowrap">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;