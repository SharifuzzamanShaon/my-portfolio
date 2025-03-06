import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
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
          <a
            href={project.liveLink || "#"}
            target={project.liveLink ? "_blank" : undefined}
            rel={project.liveLink ? "noopener noreferrer" : undefined}
            className={`px-4 py-2 text-sm rounded-lg ${
              project.liveLink
                ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
            }`}
            disabled={!project.liveLink}
          >
            Live Demo
          </a>

          <a
            href={project?.gitRepo || "#"}
            target={project?.gitRepo ? "_blank" : undefined}
            rel={project?.gitRepo ? "noopener noreferrer" : undefined}
            className={`px-4 py-2 text-sm rounded-lg ${
              project?.gitRepo
                ? "bg-gray-500 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
            }`}
            disabled={!project?.gitRepo}
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
