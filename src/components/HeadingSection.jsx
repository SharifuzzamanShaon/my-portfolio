import React from 'react'
import { DiNodejs } from 'react-icons/di'
import { FaJsSquare } from 'react-icons/fa'
import { RiReactjsFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si'

const HeadingSection = () => {
  return (
    <>
              {/* Heading Section */}
              <div className="lg:h-[30vh] sm:h-screen bg-gradient-to-r  flex items-center justify-center text-white px-6 py-12 mt-6 relative overflow-hidden rounded-lg shadow-lg z-0">
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
                  <h1 className="text-1xl sm:text-2sl font-sm tracking-wide text-white mb-3">
                    Greetings,
                  </h1>
                  <h1 className="text-2sl sm:text-4xl font-sm tracking-wide text-white mb-3">
                    I'm{" "}
                    <span className="text-yellow-400">Sharifuzzaman Hasan</span>
                  </h1>
                  <p className="text-sm sm:text-1xl font-medium max-w-2xl text-gray-300 mb-4">
                    A passionate{" "}
                    <span className="text-yellow-400">
                      Full-Stack Developer
                    </span>{" "}
                    <span className="text-gray-400">|</span>{" "}
                    <span className="text-yellow-400">
                      JavaScript Enthusiast
                    </span>
                  </p>
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
  )
}

export default HeadingSection