import React from "react";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-16 bg-[rgb(44,37,35)] text-white px-2 sm:px-16 lg:px-24"
    >
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
        {/* Left Text */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-0">
          <h1 className="text-4xl font-bold text-cyan-400 mb-6 josefin-sans">
            About Me
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-justify">
           I’m a passionate Full Stack Web Developer who started my coding journey with curiosity and turned it into a profession. I love building modern, user-friendly web applications using React, Node.js, and other cutting-edge technologies. Problem-solving excites me, and I’m always eager to learn new skills. Outside of coding, I enjoy sports and exploring creative ideas. My goal is to create efficient, scalable, and visually appealing digital experiences.
          </p>
        <Link
            to="projects"       
            smooth={true}
            duration={500}
        
            className="w-full md:w-[170px] px-6 py-2 rounded-full text-white font-semibold border-2 border-[#fb9718] hover:bg-[#fb9718] hover:text-black transition-colors duration-300 cursor-pointer inline-block text-center"
          >
            Explore Projects
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center px-4 sm:px-0">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/src/assets/about-me.png"
              alt="Raseduzzaman Rased"
              className="w-full rounded-2xl shadow-lg shadow-[#fb9718]/50"
            />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#fb9718]/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
