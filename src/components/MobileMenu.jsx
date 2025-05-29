import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileMenu = ({projectsRef,contactRef}) => {
  const pdfUrl = import.meta.env.VITE_CV_DRIVE_URL;
  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };
  return (
    <nav>
      <div className="flex space-x-4">
        <button onClick={handleOpenPdf} className="flex items-center space-x-2">
          <a
            className={`text-yellow-400 hover:text-yellow-500 transition text-sm font-semibold tracking-wide flex items-center space-x-2`}
          >
            <span>RESUME</span>
            <BsDownload className="text-sm" />
          </a>
        </button>
        <button
          onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
          className={`text-gray-300 dark:text-gray-400 hover:text-yellow-500 transition text-sm font-semibold tracking-wide`}
        >
          PROJECTS
        </button>
        <button
          onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
          className={`text-gray-300 dark:text-gray-400 hover:text-yellow-500 transition text-sm font-semibold tracking-wide`}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default MobileMenu;
