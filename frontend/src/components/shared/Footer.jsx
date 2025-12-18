import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import mainLogo from "../../assets/main-icon-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className="border-t border-gray-600 w-full" />

      {/* Divider + Logo */}
      <div className="flex items-center justify-center gap-4 py-6 w-full">
        <div className="flex-1 h-px bg-gray-700"></div>

        <img src={mainLogo} alt="BookMyScreen Logo" className="w-28" />

        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <FaFacebook className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        <FaPinterest className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
      </div>

      {/* Copyright */}
      <p className="text-center text-xs px-4 pb-6 max-w-4xl mx-auto">
        Copyright {new Date().getFullYear()} @ BookMyScreen Pvt Ltd. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
