import { DiNodejs } from "react-icons/di";
import { FaJsSquare } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import StickyContact from "../components/ContactOption";
const HomePage = ({ darkMode }) => {
  const profileImg = import.meta.env.VITE_PROFILE_IMG; // Ensure dynamic profile image

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000B58] to-[#003161] flex items-center justify-center text-white px-6 py-12">
      <div className="text-center max-w-5xl space-y-12">
        {/* Heading Section */}
        <div className="h-[40vh] bg-gradient-to-r from-[#003161] via-[#006A67] to-[#000B58] flex items-center justify-center text-white px-6 py-12 relative overflow-hidden rounded-lg shadow-lg z-0">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-40 h-40 bg-yellow-400 opacity-20 rounded-full top-10 left-1/4 blur-2xl animate-pulse"></div>
            <div className="absolute w-32 h-32 bg-blue-300 opacity-30 rounded-full bottom-8 right-10 blur-xl animate-pulse"></div>
            <div className="absolute w-36 h-36 bg-pink-300 opacity-25 rounded-full top-20 right-1/3 blur-xl animate-pulse"></div>
          </div>
          {/* Content Section */}
          <div className="relative z-10 text-center max-w-5xl space-y-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Text Content */}
              <div className="text-center sm:text-left mt-5">
                <h1 className="text-1xl sm:text-3xl font-bold tracking-wide text-white mb-4">
                  Greetings,
                </h1>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-wide text-white mb-4">
                  I'm{" "}
                  <span className="text-yellow-400">Sharifuzzaman Hasan</span>
                </h1>
                <p className="text-xl sm:text-2xl font-medium max-w-2xl text-gray-300 mb-4">
                  A passionate{" "}
                  <span className="text-yellow-400">Full-Stack Developer</span>{" "}
                  <span className="text-gray-400">|</span>{" "}
                  <span className="text-yellow-400">JavaScript Enthusiast</span>
                </p>
              </div>
<StickyContact/>
              {/* Profile Image */}
              <div className="relative flex items-center justify-center">
                {/* Profile Image */}
                <img
                  src={"/profile-image.jpg"}
                  alt="Sharifuzzaman Hasan"
                  className="rounded-full w-24 h-24 object-cover shadow-xl transform transition duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400 opacity-70 animate-pulse"></div>

                {/* Icons with Sliding Animation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <DiNodejs className="text-green-600 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-green-700" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      Node.js
                    </span>
                  </div>
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <RiReactjsFill className="text-cyan-400 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-cyan-500" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      React.js
                    </span>
                  </div>
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <FaJsSquare className="text-yellow-500 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-yellow-600" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      JavaScript
                    </span>
                  </div>
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <SiExpress className="text-gray-800 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-gray-900" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      Express.js
                    </span>
                  </div>
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <SiMongodb className="text-green-800 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-green-900" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      MongoDB
                    </span>
                  </div>
                  <div className="group flex flex-col items-center text-center translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <SiMysql className="text-blue-500 w-12 h-12 transform transition duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                    <span className="mt-2 text-lg font-semibold text-gray-200 group-hover:text-white">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 relative inline-block">
          <span className="relative z-10">About Me</span>
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></span>
        </h2>
        <div className="text-center sm:text-left text-gray-200 max-w-3xl mx-auto space-y-4">
          <p className="text-lg sm:text-xl leading-relaxed">
            Hi, I'm{" "}
            <span className="font-bold text-yellow-400">
              Sharifuzzaman Hasan
            </span>
            , a passionate Full-Stack Developer and final-year Computer Science
            and Engineering student with expertise in the{" "}
            <span className="font-bold">MERN stack</span> (MongoDB, Express.js,
            React.js, Node.js) and JavaScript.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            I specialize in building innovative and scalable web solutions, with
            hands-on experience in{" "}
            <span className="font-bold">frontend development</span> (React.js,
            TypeScript), <span className="font-bold">backend systems</span>{" "}
            (Node.js, Express.js), and{" "}
            <span className="font-bold">database management</span> (MongoDB,
            MySQL).
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Driven by problem-solving and collaboration, I strive to create
            seamless digital experiences.{" "}
            <span className="font-bold text-yellow-400">
              Explore my projects
            </span>{" "}
            and let’s connect!
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
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
            {/* Skill Icon Items */}
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
