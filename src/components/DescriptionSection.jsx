import React from "react";

const DescriptionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 relative inline-block">
        <span className="relative z-5 font-semibold bg-slate-500 p-1">
          About Me
        </span>
        {/* <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></span> */}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-gray-200 text-start">
        <div>
          <p className="text-sm sm:text-lg leading-relaxed mb-4">
            Hi, I'm{" "}
            <span className="font-sm text-yellow-400">Sharifuzzaman Hasan</span>
            , a passionate Full-Stack Developer and final-year Computer Science
            and Engineering student with expertise in the{" "}
            <span className="font-bold">MERN stack</span> (MongoDB, Express.js,
            React.js, Node.js) and JavaScript.
          </p>
          <p className="text-lg sm:text-lg leading-relaxed mb-4">
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

        {/* Education Background Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            <p className="text-lg sm:text-lg leading-relaxed text-left">
              <span className="font-bold bg-slate-500 p-1">
                BSc in Computer Science & Engineering
              </span>
              <br />
              Southeast University, Dhaka, Bangladesh <br />
              <span className="font-sm italic text-sm sm:text-1xl font-medium">
                {" "}
                Expected Graduation Date: November 2025
              </span>
            </p>
            <p className="text-sm sm:text-lg leading-relaxed text-left">
              <span className="font-bold bg-slate-500 p-1">
                Diploma in Computer Technology
              </span>
              <br />
              Bangladesh Institute of Information Technology, Bogura <br/>
              <span className="text-sm sm:text-1xl font-medium italic">(2015-2019)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
