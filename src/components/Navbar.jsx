import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ contactRef, projectsRef }) => {
  const pdfUrl = import.meta.env.VITE_CV_DRIVE_URL;
  const location = useLocation();
  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="hidden md:flex space-x-4">
      <button onClick={handleOpenPdf} className="flex items-center space-x-2">
        <a
          className={`${
            location.pathname === "/resume"
              ? "text-yellow-400"
              : "text-blue-700 dark:text-blue-700"
          } hover:text-yellow-500 transition text-sm  tracking-wide flex items-center space-x-2`}
        >
          <span>RESUME</span>
          <BsDownload className="text-lg" />
        </a>
      </button>
      <button onClick={()=>handleScroll(projectsRef)}>
        <span
          className={`text-gray-300 dark:text-gray-400 hover:text-[#1f2937] transition text-sm tracking-wide`}
        >
          PROJECTS
        </span>
      </button>
      <button onClick={() => handleScroll(contactRef)}>
        <span
          className={`text-gray-300 dark:text-gray-400 hover:text-[#1f2937] transition text-sm tracking-wide`}
        >
          CONTACT
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
