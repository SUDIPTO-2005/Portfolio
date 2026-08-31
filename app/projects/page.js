// @flow strict

import { projectsData } from "@/data/projects.data";
import SingleProjectCard from "@/components/features/projects/single-project-card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const metadata = {
  title: "Projects | SUDIPTO BHADRA",
  description: "All projects engineered by Sudipto Bhadra in AI, Full-Stack, and Software Development.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 sm:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-violet-900/30">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#16f2b3] hover:underline mb-2 group"
          >
            <FaArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            All Projects &amp; Creations
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Explore featured software engineering, AI systems, and open-source contributions.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {projectsData.map((project) => (
          <SingleProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
