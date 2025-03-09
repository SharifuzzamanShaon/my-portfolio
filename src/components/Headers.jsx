import { useEffect, useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = ({ darkMode, setDarkMode, contactRef, projectsRef }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] bg-opacity-90 py-2 shadow-lg"
          : "bg-transparent py-4"
      } dark:bg-gray-800 dark:bg-opacity-90`}
    >
      <div className="w-full flex justify-between items-center px-6">
        {/* Hamburger Menu Icon for Mobile */}
        <AiOutlineAlignLeft
          className="block xl:hidden text-gray-100 dark:text-gray-200 cursor-pointer"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        {/* Logo */}
        <div className="text-xl font-bold text-gray-100 dark:text-gray-200">
          {openMobileMenu ? (
            <MobileMenu />
          ) : (
            <Link to="/">
              <img
                src="/pagelogo.png"
                className={`h-8 transition-all duration-300 ${
                  isScrolled ? "h-6" : "h-8"
                }`}
                alt="Logo"
              />
            </Link>
          )}
        </div>
        {/* Navigation */}
        <Navbar contactRef={contactRef} projectsRef={projectsRef}/>
      </div>
    </header>
  );
};

export default Header;
