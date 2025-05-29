import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 font-poppins">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-yellow-400 dark:text-white">
          {project.name}
        </h3>
        <p className="text-sm text-white dark:text-gray-300 mt-2">
          {project.description}
        </p>
        <div className="mt-4">
          <span className="font-bold text-white dark:text-gray-200">
            Technologies:{" "}
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project?.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-white font-medium text-sm px-3 py-1 rounded-full shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex space-x-4 justify-center">
          {/* Live Demo Button */}
          <a
            href={project.liveLink || "#"}
            target={project.liveLink ? "_blank" : undefined}
            rel={project.liveLink ? "noopener noreferrer" : undefined}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 
      ${
        project.liveLink
          ? "flex items-center gap-2 border border-gray-600 p-1 rounded-lg text-white font-semibold  hover:bg-gray-800 hover:text-white hover:scale-105  shadow-md"
          : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70 dark:bg-gray-700 dark:text-gray-500"
      }`}
          >
            <span className="animate-pulse">Live Demo</span>
          </a>

          {/* GitHub Repo Button */}
          <a
            href={project?.gitRepo || "#"}
            target={project?.gitRepo ? "_blank" : undefined}
            rel={project?.gitRepo ? "noopener noreferrer" : undefined}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 
      ${
        project?.gitRepo
          ? "bg-gray-700 text-white hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-md"
          : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70 dark:bg-gray-700 dark:text-gray-500"
      }`}
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
