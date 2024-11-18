import { DiNodejs } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
const HomePage = ({ darkMode }) => {
  const profileImg = import.meta.env.VITE_PROFILE_IMG; // Ensure dynamic profile image

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-600 flex items-center justify-center text-white px-6 py-12">
      <div className="text-center max-w-5xl space-y-10">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide text-white mb-4">
            Greetings, I'm{" "}
            <span className="text-yellow-400">Sharifuzzaman Hasan</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium max-w-2xl mx-auto text-gray-300 mb-4">
            A passionate{" "}
            <span className="text-yellow-400">Full-Stack Developer</span>{" "}
            <span className="text-gray-400">|</span>{" "}
            <span className="text-yellow-400">JavaScript Enthusiast</span>
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
            Building impactful web solutions.
          </h3>
        </div>

        <div className="flex items-center justify-center space-x-4 my-3">
          {/* Profile Image */}
          <img
            src={"/profile-image.jpg"}
            alt="Sharifuzzaman Hasan"
            className="rounded-full w-24 h-24 object-cover shadow-xl transform transition duration-500 hover:scale-110"
          />

          {/* CTA Button */}
          <Link to="/projects">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 font-semibold py-2 px-6 rounded-full text-md shadow-xl hover:shadow-2xl transform transition duration-300 hover:scale-105">
              View My Projects
            </span>
          </Link>
        </div>

        {/* Skills Icons Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            <div className="group flex flex-col items-center text-center">
              <DiNodejs className="text-green-600 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-green-700" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                Node.js
              </span>
            </div>
            <div className="group flex flex-col items-center text-center">
              <RiReactjsFill className="text-cyan-400 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-cyan-500" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                React.js
              </span>
            </div>
            <div className="group flex flex-col items-center text-center">
              <FaJsSquare className="text-yellow-500 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-yellow-600" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                JavaScript
              </span>
            </div>
            <div className="group flex flex-col items-center text-center">
              <SiExpress className="text-gray-800 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-gray-900" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                Express.js
              </span>
            </div>
            <div className="group flex flex-col items-center text-center">
              <SiMongodb className="text-green-800 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-green-900" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                MongoDB
              </span>
            </div>
            <div className="group flex flex-col items-center text-center">
              <SiMysql className="text-blue-500 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-blue-600" />
              <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                MySQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
