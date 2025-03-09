import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaTwitter, FaLinkedin, FaGithub, FaTwitterSquare, FaLinkedinIn, FaGithubAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = ({ darkMode, setDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
  className={`min-h-screen  bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] flex dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
>
  {/* Contact Section */}
  <div className="pt-24 pb-6 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] dark:bg-gray-700 p-8 rounded-lg shadow-lg">
      {/* Left Column: Contact Info */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Get in Touch
        </h2>
        <p className="text-white dark:text-gray-300">
          I’d love to hear from you! Feel free to reach out using the details
          below or fill out the form.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <BsWhatsapp className="text-blue-500 w-6 h-6" />
            <span className="text-white dark:text-gray-100">
              +8801302-216999
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 w-6 h-6" />
            <span className="text-white dark:text-gray-100">
              shasan2200@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-700 w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </div>

    </div>

    {/* Social Links */}
    <div className="mt-10 text-center">
      <h3 className="text-sm font-semibold  text-white">FIND ME ON:</h3>
      <div className="flex justify-center space-x-8">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          {/* <FaTwitterSquarr className="w-8 h-8" /> */}
        </a>
        <a
          href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition duration-300"
        >
          <FaLinkedinIn className="w-8 h-8" />
        </a>
        <a
          href="https://github.com/SharifuzzamanShaon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700 transition duration-300"
        >
          <FaGithubAlt className="w-8 h-8" />
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactPage;
