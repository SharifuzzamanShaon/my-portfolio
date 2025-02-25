import { DiNodejs } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MySkills from "../components/MySkills";
import ProjectCard from "../components/ProjectCard";
import projects from "../ProjectData/Projects";
import HeadingSection from "../components/HeadingSection";
import StickyContact from "../components/ContactOption";
import ContactPage from "./ContactPage";
import DescriptionSection from "../components/DescriptionSection";
const HomePage = ({ darkMode }) => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] flex items-center justify-center text-white px-6 py-12">
        <div className="text-center max-w-5xl space-y-10">
          <HeadingSection />
          <StickyContact/>
          {/* Description Section */}
          <DescriptionSection/>
          {/* CTA Button */}
          <div className="mt-6">
            <Link to="/projects">
              <span className=" bg-gradient-to-r from-[#5c5a52] to-[#3a3a3a]  font-semibold py-2 px-6 rounded-full text-md shadow-xl hover:shadow-2xl text-white transform transition duration-300 hover:scale-105">
                View My Projects
              </span>
            </Link>
          </div>
          {/* Display My Skill */}
          {/* Porjects */}
        </div>
      </div>
          <MySkills />
      <div className="grid grid-cols-1  bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 px-2">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <ContactPage/>
    </>
  );
};

export default HomePage;
