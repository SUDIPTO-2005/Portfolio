// @flow strict
import { projectsData } from '@/utils/data/projects-data';
import Reveal from '../../helper/reveal';
import SingleProject from './single-project';

function Projects() {
  return (
    <div id='projects' className="relative z-50 border-t my-12 sm:my-16 lg:my-28 border-[#25213b]">
      <div className="w-[150px] h-[150px] bg-[#16f2b3] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-[120px] opacity-15 pointer-events-none"></div>

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
              FEATURED PROJECTS
            </span>
            <span className="w-8 sm:w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
          </div>
        </div>
      </Reveal>

      {/* Primary Featured Projects from projectsData */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 my-6 sm:my-8">
        {projectsData.map((project, i) => (
          <Reveal key={project.id || i} direction="up" delay={i * 100}>
            <SingleProject project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Projects;