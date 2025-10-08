import React from "react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left: Logo + Site Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Hero.io Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold">Hero.io</span>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/" className="hover:text-purple-500">Contact</a>
          <a href="/" className="hover:text-purple-500">Services</a>
          <a href="/" className="hover:text-purple-500">Help-line</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500">
            <FaFigma size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Hero.io. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
