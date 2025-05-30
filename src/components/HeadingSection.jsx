import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DiNodejs } from "react-icons/di";
import { FaGithubAlt, FaJsSquare, FaLinkedinIn } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const HeadingSection = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="lg:h-[30vh] sm:h-screen bg-gradient-to-r  flex items-center justify-center text-white px-6 py-6 mt-6 relative overflow-hidden rounded-lg shadow-lg z-0">
        {/* Content Section */}
        <div className="relative z-10 text-center max-w-5xl space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Text Content */}
            <div className="text-center sm:text-left mt-5 font-poppins">
              <h1 className="text-1xl sm:text-2sl font-sm tracking-wide text-white mb-3">
                Greetings 👋,
              </h1>
              <h1 className="text-2sl sm:text-4xl font-sm tracking-wide text-white mb-3 font-poppins">
                I'm <span className="text-yellow-400 sm:text-2xl">Sharifuzzaman Hasan</span>
              </h1>
              <p className="text-sm sm:text-1xl font-medium max-w-2xl text-gray-300 mb-4">
                A passionate{" "}
                <span className="text-yellow-400">Full-Stack Developer</span>{" "}
                <span className="text-gray-400">|</span>{" "}
                <span>Node Js | React Js | Next Js</span>
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <a
                  href="https://github.com/SharifuzzamanShaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition duration-300"
                >
                  <FaGithubAlt className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-900 transition duration-300"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex items-center justify-center">
              {/* Profile Image */}
              <img
                src={"/profile-image.jpg"}
                alt="Sharifuzzaman Hasan"
                className="rounded-full w-24 h-24 object-cover shadow-xl transform transition duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-4 border-black opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingSection;
