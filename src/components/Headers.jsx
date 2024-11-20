import { useEffect, useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log(document.documentElement.classList);
    } else {
      document.documentElement.classList.remove("dark");
      console.log(document.documentElement.classList);
    }
  }, [darkMode]);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <header className="bg-gray-900 dark:bg-gray-800 shadow-md fixed w-full top-0 z-10">
      <div className="w-full flex justify-between items-center py-3 px-6">
        {/* Hamburger Menu Icon for Mobile */}
        <AiOutlineAlignLeft
          className="block xl:hidden text-gray-100 dark:text-gray-200"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
        {/* Logo */}
        <div className="text-xl font-bold text-gray-100 dark:text-gray-200">
          {openMobileMenu ? (
            <MobileMenu/>
          ) : (
            <Link to="/">
              <img src="/pagelogo.png" className="h-8" alt="Logo" />
            </Link>
          )}
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center justify-center w-8 h-8 bg-gray-700 dark:bg-gray-600 rounded-full hover:bg-gray-600 dark:hover:bg-gray-500 transition"
        >
          {darkMode ? (
            <svg
              className="w-5 h-5 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.752 15.002A9.718 9.718 0 0012.998 3.75a.75.75 0 01-.557-1.275A11.245 11.245 0 0112.998 0c6.21 0 11.25 5.04 11.25 11.25 0 2.419-.784 4.659-2.104 6.502a.75.75 0 01-1.393-.504z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-200 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8-8h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l.707.707M16.95 7.05l.707-.707M7.05 16.95l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
