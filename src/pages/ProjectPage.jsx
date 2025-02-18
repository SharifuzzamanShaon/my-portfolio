import React from "react";
import projects from "../ProjectData/Projects";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen  bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] flex dark:bg-gray-900 text-gray-900 dark:text-gray-100 `}
    >
      <section className="py-10  dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-sm text-center mb-6 text-gray-800 dark:text-gray-200">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
