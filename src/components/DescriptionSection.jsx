import React from "react";

const DescriptionSection = () => {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-sm tracking-tight text-white mb-2 relative inline-block">
        <span className="relative z-5 font-sm">About Me</span>
        <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg"></span>
      </h2>
      <div className="text-center sm:text-left text-gray-200 max-w-3xl mx-auto space-y-4">
        <p className="text-sm sm:text-lg leading-relaxed">
          Hi, I'm{" "}
          <span className="font-bold text-yellow-400">Sharifuzzaman Hasan</span>
          , a passionate Full-Stack Developer and final-year Computer Science
          and Engineering student with expertise in the{" "}
          <span className="font-bold">MERN stack</span> (MongoDB, Express.js,
          React.js, Node.js) and JavaScript.
        </p>
        <p className="text-lg sm:text-lg leading-relaxed">
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
          <span className="font-bold text-yellow-400">Explore my projects</span>{" "}
          and let’s connect!
        </p>
      </div>
    </>
  );
};

export default DescriptionSection;
