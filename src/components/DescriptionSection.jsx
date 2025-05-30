import React from "react";
import { BsDownload } from "react-icons/bs";

const DescriptionSection = ({ scrollToProjects }) => {
  const pdfUrl = import.meta.env.VITE_CV_DRIVE_URL;
  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };
  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 relative inline-block">
        <span className="relative z-5  font-light  bg-slate-500 p-1 rounded-lg px-4 font-poppins">
        {`About Me`}  
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-gray-200 text-start mt-4">
        <div>
          <p className="text-sm sm:text-md leading-relaxed mb-4 font-poppins">
            Hi, I'm{" "}
            <span className="font-sm text-yellow-400">Sharifuzzaman Hasan</span>
            , a passionate Full-Stack Developer and final-year Computer Science
            and Engineering student with expertise in the{" "}
            <span className="font-bold">MERN stack</span> (MongoDB, Express.js,
            React.js, Node.js) and JavaScript.
          </p>
          <p className="text-sm sm:text-md leading-relaxed mb-4 font-poppins">
            I specialize in building innovative and scalable web solutions, with
            hands-on experience in{" "}
            <span className="font-bold">frontend development</span> (React.js,
            TypeScript), <span className="font-bold">backend systems</span>{" "}
            (Node.js, Express.js), and{" "}
            <span className="font-bold">database management</span> (MongoDB,
            MySQL).
          </p>
          <p className="text-sm sm:text-md leading-relaxed mb-4 font-poppins">
            Driven by problem-solving and collaboration, I strive to create
            seamless digital experiences.{" "}
            <span className="font-bold text-yellow-400">
              Explore my projects
            </span>{" "}
            and let’s connect!
          </p>
          <div className="mt-5 flex justify-center space-x-4">
            {/* Find My Resume Button */}
            <button
              onClick={handleOpenPdf}
              className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-lg text-white font-semibold 
             transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95 shadow-md"
            >
              <span className="animate-pulse font-poppins text-sm font-light uppercase cursor-pointer">Find Resume</span>
              <BsDownload className="text-xl" />
            </button>

            {/* View My Projects Button */}
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded-lg text-white font-semibold 
             transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 active:scale-95 shadow-md"
            >
              <span className="animate-pulse font-poppins text-sm font-light uppercase cursor-pointer">View Projects</span>
            </button>
          </div>
        </div>

        {/* Education Background Section */}
        <div>
          <h3 className="text-xl sm:text-md font-sm text-yellow-400 mb-4 font-light font-poppins text-center">
            Education
          </h3>
          <div className="space-y-4">
            <p className="text-sm sm:text-lg leading-relaxed text-left font-poppins">
              <span className="font-bold bg-gray-800 p-1 font-poppins">
                BSc in Computer Science & Engineering
              </span>
              <br />
              Southeast University, Dhaka, Bangladesh <br />
              <span className="font-sm italic text-sm sm:text-1xl font-medium">
                {" "}
                Expected Graduation Date: November 2025
              </span>
            </p>
            <p className="text-sm sm:text-lg leading-relaxed text-left font-poppins">
              <span className="font-bold bg-gray-800 p-1">
                Diploma in Computer Technology
              </span>
              <br />
              Bangladesh Institute of Information Technology, Bogura <br />
              <span className="text-sm sm:text-1xl font-medium italic">
                (2015-2019)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
