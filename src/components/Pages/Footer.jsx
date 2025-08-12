import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2c2523] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Name */}
        <div className="text-2xl font-bold text-cyan-400">
          Md. Raseduzzaman Rased
        </div>

        {/* Menu List */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-gray-300 text-lg">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-cyan-400 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-cyan-400 transition">
                Qualification
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-300 text-2xl">
          <a
            href="https://github.com/raseduzzaman-rased"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/mdraseduzzaman.rased0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com/in/raseduzzaman-rased"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/freelancerrased"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
