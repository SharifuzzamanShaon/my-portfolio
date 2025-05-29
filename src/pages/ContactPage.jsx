import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";

const ContactPage = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] bg-gradient-to-r from-[#2d3363] to-[#bbbbbb] dark:bg-gray-900 text-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/10 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-200">
            I’d love to hear from you. Whether you have a question or just want to connect, feel free to contact me!
          </p>
          <div className="space-y-4 text-gray-100">
            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-green-500 w-6 h-6" />
              <span>+8801302-216999</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 w-6 h-6" />
              <span>shasan2200@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedinIn className="text-blue-500 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/sharifuzzaman-hasan
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold mb-2">FIND ME ON:</h3>
            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition"
              >
                <FaLinkedinIn className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/SharifuzzamanShaon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <FaGithubAlt className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-300 text-sm">Message sent successfully!</p>
          )}
        </form> */}
      </div>
    </div>
  );
};

export default ContactPage;
