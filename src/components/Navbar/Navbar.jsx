import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";


const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Navbar = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] mt-6 gap-4 flex">
      {/* nav container  */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-5 rounded-r-full rounded-l-full border-[0.5px] border-[#fb9718]">
        {/* logo section  */}
        <div>
          <h1 className="text-white text-2xl josefin-sans">
            Raseduzzaman Rased
          </h1>
        </div>

        {/* menu section  */}
        <div>
           <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
        </div>

        {/* hire me section  */}
        <div>
          <button className="px-4 rounded-full text-lg font-bold text-black border border-cyan-400 flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-[#fb9718] hover:border-[#fb9718] hover:shadow-[0_0_20px_rgba(94,206,220,0.5)] hover:scale-110 transition-all duration-500">
            Download CV <LuArrowDownRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
