import MySkills from "../components/MySkills";
import ProjectCard from "../components/ProjectCard";
import projects from "../ProjectData/Projects";
import HeadingSection from "../components/HeadingSection";
import StickyContact from "../components/ContactOption";
import ContactPage from "./ContactPage";
import DescriptionSection from "../components/DescriptionSection";
import Header from "../components/Headers";
import { useRef } from "react";
import Footer from "../components/Footer";
import Achivements from "../components/Achivements";
import GitHubProfile from "../components/GitHubActivity";
import LeetCodeProfile from "../components/LeetCodeActivity";
const HomePage = ({ darkMode }) => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header contactRef={contactRef} projectsRef={projectsRef} />
      <div className="min-h-screen bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] flex items-center justify-center text-white px-6 py-12">
        <div className="text-center max-w-5xl space-y-10">
          <HeadingSection />
          <StickyContact />
          <DescriptionSection scrollToProjects={scrollToProjects} />
        </div>
      </div>
      <MySkills />
      <section ref={projectsRef}>
        <div className="bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] sm:grid-cols-2 py-6">
          {/* Title Section */}
          <div className="flex justify-center">
            <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 relative inline-block text-center">
              <span
                className="relative z-5 p-2 rounded-lg px-6 font-light uppercase"
                ref={projectsRef}
              >
                Projects
              </span>
            </h2>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 max-w-6xl mx-auto px-4">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* GitHub Profile Section */}
      <div className="bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] sm:grid-cols-2 py-6 text-white">
        <div className="flex flex-row max-w-6xl mx-auto px-4">
          <GitHubProfile />
          <LeetCodeProfile />
        </div>
      </div>
      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] sm:grid-cols-2 py-6 text-white ">
          <Achivements />
      </div>
      <section ref={contactRef}>
        <ContactPage />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
