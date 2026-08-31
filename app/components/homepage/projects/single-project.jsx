"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import TiltCard from "../../helper/tilt-card";

export default function SingleProject({ project, index }) {
  const codeLink = project.code || "https://github.com/SUDIPTO-2005";
  const demoLink = project.demo || project.code || "https://github.com/SUDIPTO-2005";
  const projectImg = project.image || "/image/crefin.jpg";

  return (
    <TiltCard maxTilt={5} className="h-full">
      <div className="h-full flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0a0f1d]/95 hover:border-slate-700/90 shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-300 overflow-hidden group">
        <div>
          {/* Project Image Preview Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden bg-[#040711] border-b border-slate-800/60">
            {/* Ambient Background Glow */}
            <Image
              src={projectImg}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              aria-hidden="true"
              className="object-cover filter blur-xl opacity-30 scale-110"
            />

            {/* Main Full Uncropped Image */}
            <div className="relative w-full h-full p-2 flex items-center justify-center">
              <Image
                src={projectImg}
                alt={project.name}
                fill
                className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Project Category / Achievement Badge */}
            {project.badge && (
              <div className="absolute top-3 right-3 z-10">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white shadow-[0_2px_12px_rgba(0,0,0,0.6)] backdrop-blur-md ${project.badgeColor || 'bg-[#10b981]'}`}>
                  {project.badge}
                </span>
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 pb-2">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-[#16f2b3] transition-colors duration-200">
              {project.name}
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed min-h-[4.2rem] mb-4">
              {project.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools?.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#101b38] text-[#38bdf8] border border-[#1e2f5d]/70 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action Buttons */}
        <div className="p-5 sm:p-6 pt-2 flex items-center justify-between gap-3 mt-auto">
          <Link
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#0e172e] hover:bg-[#152347] border border-[#1b2b52] text-xs sm:text-sm font-medium text-[#38bdf8] hover:text-[#60a5fa] hover:border-sky-500/40 transition-all duration-200 shadow-sm"
          >
            <FiExternalLink size={15} />
            <span>Live Demo</span>
          </Link>

          <Link
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#111827] hover:bg-[#1f293d] border border-slate-700/60 text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:border-slate-500 transition-all duration-200 shadow-sm"
          >
            <BsGithub size={16} />
            <span>Code</span>
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}