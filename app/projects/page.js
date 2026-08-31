// @flow strict

import { projectsData } from "@/utils/data/projects-data";
import SingleProject from "../components/homepage/projects/single-project";

export const metadata = {
  title: "Projects | Sudipto Bhadra",
  description: "Featured engineering projects, AI platforms, and full-stack solutions built by Sudipto Bhadra.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="flex justify-center my-6 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2.5 px-6 text-xl sm:text-2xl rounded-md border border-violet-700/40 shadow-[0_0_20px_rgba(26,20,67,0.8)] font-semibold tracking-wider">
            ALL PROJECTS
          </span>
          <span className="w-12 sm:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-6">
        {projectsData.map((project, i) => (
          <SingleProject project={project} index={i} key={project.id || i} />
        ))}
      </div>
    </div>
  );
}
