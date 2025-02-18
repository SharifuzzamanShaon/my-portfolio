import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const pdfUrl = import.meta.env.VITE_CV_DRIVE_URL;
  const location = useLocation();
  const handleOpenPdf = () => {
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  };
  return (
    <nav className="flex space-x-4">
      <button onClick={handleOpenPdf} className="flex items-center space-x-2">
        <a
          className={`${
            location.pathname === "/resume"
              ? "text-yellow-400"
              : "text-blue-700 dark:text-blue-700"
          } hover:text-yellow-500 transition text-sm font-semibold tracking-wide flex items-center space-x-2`}
        >
          <span>RESUME</span>
          <BsDownload className="text-sm" />
        </a>
      </button>
      <Link to="/projects">
        <span
          className={`${
            location.pathname === "/projects"
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-400"
          } hover:text-yellow-500 transition text-sm font-semibold tracking-wide`}
        >
          PROJECTS
        </span>
      </Link>
      <Link to="/contact">
        <span
          className={`${
            location.pathname === "/contact"
              ? "text-yellow-400"
              : "text-gray-300 dark:text-gray-400"
          } hover:text-yellow-500 transition text-sm font-semibold tracking-wide`}
        >
          CONTACT
        </span>
      </Link>
    </nav>
  );
};

export default MobileMenu;
