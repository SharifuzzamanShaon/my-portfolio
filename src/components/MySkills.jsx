import React from "react";
import { DiNodejs } from "react-icons/di";
import { FaJsSquare, FaGitAlt } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql,SiFormik, SiPostman , SiRedux} from "react-icons/si";
import { IoPrismSharp } from "react-icons/io5";

const skills = [
  { name: "Node.js", icon: <DiNodejs />, color: "text-green-600 group-hover:text-green-700" },
  { name: "React.js", icon: <RiReactjsFill />, color: "text-cyan-400 group-hover:text-cyan-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-cyan-400 group-hover:text-cyan-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500 group-hover:text-yellow-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-800 group-hover:text-gray-900" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-800 group-hover:text-green-900" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-500 group-hover:text-blue-600" },
  { name: "Formik", icon: <SiFormik />, color: "text-blue-500 group-hover:text-blue-600" },
  { name: "Prisma", icon: <IoPrismSharp />, color: "text-blue-500 group-hover:text-blue-600" },
  { name: "Postman", icon: <SiPostman />, color: "text-red-400 group-hover:text-red-300" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-blue-500 group-hover:text-blue-600" },
  { name: "Git | GitHub", icon: <FaGitAlt />, color: "text-black-500 group-hover:text-black-600" },
  
];

const MySkills = () => {
  return (
    <div className="mt-10 py-10">
      <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
        SKILLS ON TECHNOLOGY
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center  py-8">
        {skills.map((skill, index) => (
          <div key={index} className="group flex flex-col items-center text-center">
            <div className={`w-16 h-16 transform transition duration-300 group-hover:scale-110 ${skill.color}`}>
              {React.cloneElement(skill.icon, { className: "w-full h-full" })}
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-200 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
