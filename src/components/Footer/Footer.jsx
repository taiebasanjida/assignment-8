// src/components/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-2xl font-bold text-purple-500">Hero.io</h2>
          <p className="text-gray-400 text-sm">
            Discover and install amazing apps that enhance your productivity, health, and learning experience.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h3 className="font-semibold text-white text-lg mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li><a href="/" className="hover:text-purple-500 transition">Home</a></li>
            <li><a href="/apps" className="hover:text-purple-500 transition">All Apps</a></li>
            <li><a href="/installations" className="hover:text-purple-500 transition">Installations</a></li>
            <li><a href="https://github.com/taiebasanjida" className="hover:text-purple-500 transition">GitHub</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h3 className="font-semibold text-white text-lg mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@hero.io</p>
          <p className="text-gray-400 text-sm">Phone: +880 1234 567890</p>
          <p className="text-gray-400 text-sm">Address: 123, Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hero.io. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
