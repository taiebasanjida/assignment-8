import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AllApps", path: "/apps" },
    { name: "Installations", path: "/installations" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-6 flex items-center justify-between py-3 relative">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hero.io Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-gray-800">Hero.io</span>
        </div>

        {/* Center: Navigation */}
        <nav
          className={`${
            menuOpen
              ? "block absolute top-full left-0 w-full bg-white shadow-md"
              : "hidden"
          } md:block md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 py-4 md:py-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-gray-600 font-medium hover:text-purple-600 ${
                      isActive
                        ? "text-purple-600 border-b-2 border-purple-600"
                        : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Contribute Button */}
        <a
          href="https://github.com/taiebasanjida"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-white font-medium bg-[#632EE3] hover:bg-[#4d22b7] transition-all shadow-md"
        >
          <FaGithub />
          Contribute
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
