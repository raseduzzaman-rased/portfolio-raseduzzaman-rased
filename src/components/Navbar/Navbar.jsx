import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Qualification", section: "education" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[1380px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] mt-6 gap-4 flex z-50">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-5 rounded-r-full rounded-l-full border-[0.5px] border-[#fb9718]">
        {/* Logo */}
        <div>
          <h1 className="text-white text-xl md:text-2xl josefin-sans">
            Raseduzzaman Rased
          </h1>
        </div>

        {/* Hamburger and Menu Container for Mobile */}
        <div className="lg:hidden relative">
          {/* Hamburger / Close Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Cross icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu + Button */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-black bg-opacity-90 rounded-lg shadow-lg z-40">
              <ul className="flex flex-col gap-3 px-4 py-3 text-white font-body">
                {links.map((link, index) => (
                  <li key={index} className="group text-left">
                    <Link
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-130}
                      to={link.section}
                      onClick={() => setMenuOpen(false)} // Close menu on click
                      className="cursor-pointer block px-2 py-1 hover:text-cyan transition duration-300"
                    >
                      {link.link}
                    </Link>
                    <div className="bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                  </li>
                ))}
              </ul>

              {/* Download CV Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-4 py-2 rounded-full text-lg font-bold text-black border border-cyan-400 flex items-center justify-center gap-1 bg-gradient-to-r from-cyan-400 to-[#fb9718] hover:border-[#fb9718] hover:shadow-[0_0_20px_rgba(94,206,220,0.5)] hover:scale-105 transition-all duration-300"
                >
                  Download CV <LuArrowDownRight />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-2 text-white font-body">
          {links.map((link, index) => (
            <li key={index} className="group text-center lg:text-left">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                to={link.section}
                className="cursor-pointer text-white hover:text-cyan transition-all duration-500 px-3 py-1"
              >
                {link.link}
              </Link>
              <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
          ))}
        </ul>

        {/* Desktop Download CV Button */}
        <div className="hidden lg:flex">
          <button className="px-6 py-2 rounded-full text-lg font-bold text-black border border-cyan-400 flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-[#fb9718] hover:border-[#fb9718] hover:shadow-[0_0_20px_rgba(94,206,220,0.5)] hover:scale-110 transition-all duration-500">
            Download CV <LuArrowDownRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
