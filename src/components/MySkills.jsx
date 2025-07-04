import React from "react";
import { DiNodejs } from "react-icons/di";
import { FaJsSquare, FaGitAlt } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFormik,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { IoPrismSharp } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const programmingSkills = [
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "text-yellow-500 group-hover:text-yellow-600",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-blue-500 group-hover:text-blue-600",
  },
];

const skills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React JS",
        icon: <RiReactjsFill />,
        color: "text-cyan-400 group-hover:text-cyan-500",
      },
      {
        name: "Next Js",
        icon: <RiNextjsLine />,
        color: "text-gray-900 group-hover:text-white-600",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "text-purple-500 group-hover:text-purple-600",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
        color: "text-blue-500 group-hover:text-blue-600",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <DiNodejs />,
        color: "text-green-600 group-hover:text-green-700",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-800 group-hover:text-gray-900",
      },
      {
        name: "Prisma",
        icon: <IoPrismSharp />,
        color: "text-blue-500 group-hover:text-blue-600",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-800 group-hover:text-green-900",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "text-blue-500 group-hover:text-blue-600",
      },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      {
        name: "VS code",
        icon: <VscVscode />,
        color: "text-blue-400 group-hover:text-blue-300",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-red-400 group-hover:text-red-300",
      },
      {
        name: "Git | GitHub",
        icon: <FaGitAlt />,
        color: "text-black group-hover:text-gray-800",
      },
    ],
  },
];

const MySkills = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] py-4">
        {/* Programming Skills */}
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2 className="text-sm sm:text-2xl tracking-tight text-white mb-2 relative inline-block">
            <span className="relative z-5 bg-slate-500 p-1 rounded-lg px-4 font-light text-lg font-poppins">
              Qualifications:
            </span>
          </h2>

          <div className=" border-gray-300 p-4 border-s-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              {programmingSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className={`w-8 h-8 transform transition duration-200 group-hover:scale-110 ${skill.color}`}
                  >
                    {React.cloneElement(skill.icon, {
                      className: "w-full h-full",
                    })}
                  </div>
                  <span className="mt-1 text-xs font-semibold text-gray-200 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
              <div className="font-bold text-lg text-blue-500">
                C<p>Programming</p>
              </div>
            </div>
            <div className=" text-white p-6 rounded-xl shadow-lg font-poppins text-start">
              <h2 className="text-xl font-semibold mb-4">
              Programming Paradigms
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Object Oriented Programming</li>
                <li>Functional Programming</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4">
                Tech Stack & Expertise
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-md">
                  Currently working with{" "}
                  <strong>React.js, Next.js, Node.js, Express.js</strong>
                </li>
                <li className="text-md">
                  Experiance with both <strong>PostgreSQL</strong> and{" "}
                  <strong>MongoDB</strong> databases using{" "}
                  <strong>Prisma ORM</strong>
                </li>
                <li className="text-md">
                  <strong>AWS Cloud Services</strong> including EC2 and S3 | Docker | Git | GitHub 
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Skills */}
        <div className="max-w-4xl w-full mx-auto text-center">
          <h2 className="text-sm sm:text-2xl font-sm tracking-tight text-white mb-2 relative inline-block">
            <span className="relative z-5 bg-slate-500 p-1 rounded-lg px-4 font-light text-lg font-poppins">
              Technology Skills
            </span>
          </h2>

          <div className="font-poppins">
            {skills.map((category, index) => (
              <div
                key={index}
                className="mb-4 border-b-[.1px] border-b-gray-300 p-2 border-s-white"
              >
                <h3 className="text-md font-sans text-white mb-2 text-start">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-stretch">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group flex flex-col items-center text-start"
                    >
                      <div
                        className={`w-8 h-8 transform transition duration-200 group-hover:scale-110 ${skill.color}`}
                      >
                        {React.cloneElement(skill.icon, {
                          className: "w-full h-full",
                        })}
                      </div>
                      <span className="mt-1 text-xs font-semibold text-gray-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
