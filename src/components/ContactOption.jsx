import { FaPhoneAlt, FaLinkedin, FaEnvelope } from "react-icons/fa"; // You can use any icon library you prefer
import { Link } from "react-router-dom";

const StickyContact = () => {
  return (
    <div className="fixed right-4 top-1/4 space-y-4 z-50">
      {/* Phone Icon */}
      <Link
        href="tel:+8801302-216999"
        className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-600"
      >
        <FaPhoneAlt className="w-6 h-6" />
      </Link>
      {/* Gmail Icon */}
      <Link
        href="shasan2200@gmail.com"
        className="flex items-center justify-center bg-red-500 text-white p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-red-600"
      >
        <FaEnvelope className="w-6 h-6" />
      </Link>
      {/* LinkedIn Icon */}
      <Link
        href="https://www.linkedin.com/in/sharifuzzaman-hasan-0b561521a/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-700 text-white p-3 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-800"
      >
        <FaLinkedin className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default StickyContact;
