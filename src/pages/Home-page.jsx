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
import Header from "../components/Headers";
import { useRef } from "react";
const HomePage = ({ darkMode }) => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header contactRef={contactRef} projectsRef={projectsRef} />
      <div className="min-h-screen bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] flex items-center justify-center text-white px-6 py-12">
        <div className="text-center max-w-5xl space-y-10">
          <HeadingSection />
          <StickyContact />
          {/* Description Section */}
          {/* CTA Button */}
          <DescriptionSection />
          <div className="mt-6">
            <button onClick={() => handleScroll(projectsRef)}>
              <span className=" bg-slate-500 p-1  font-semibold py-2 px-6 rounded-full text-md shadow-xl hover:shadow-2xl text-white transform transition duration-300 hover:scale-105">
                View My Projects
              </span>
            </button>
          </div>
        </div>
      </div>
      <MySkills />
      <section ref={projectsRef}>
        <div className="bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] sm:grid-cols-2">
          <div className="text-center py-4">
            <h2 className="text-sm sm:text-3xl tracking-tight text-white mb-2 relative inline-block">
              <span className="bg-slate-500 p-1 py-2 px-6 rounded-full  relative z-5">Projects</span>
              {/* <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></span> */}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 max-w-6xl mx-auto px-4">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section ref={contactRef}>
        <ContactPage />
      </section>
    </>
  );
};

export default HomePage;
