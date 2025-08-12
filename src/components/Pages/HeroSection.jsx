import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section
      className="min-h-[600px] lg:min-h-screen max-w-7xl mx-auto pt-30 md:pt-20 px-8 sm:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between"
      style={{ backgroundColor: "#2c2523" }}
    >
      {/* Left text */}
      <div className="flex-1 text-white text-center pt-6 md:text-left mb-12 md:mb-0 flex flex-col justify-center px-4 sm:px-0">
        <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
          Full Stack Web Developer
        </h3>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 josefin-sans">
          Raseduzzaman <br /> Rased
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-white">
          A passionate developer focused on building awesome web experiences.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="https://drive.google.com/drive/u/0/folders/1j0el8mAVkH4eGy-ezNQipquchB60s_A5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="md:w-[190px] px-4 py-2 rounded-full text-lg font-bold text-black border border-cyan-400 flex items-center justify-center gap-1 bg-gradient-to-r from-cyan-400 to-[#fb9718] hover:border-[#fb9718] hover:shadow-[0_0_20px_rgba(94,206,220,0.5)] hover:scale-105 transition-all duration-300">
              Grab My CV <LuArrowDownRight />
            </button>
          </a>
        </div>
      </div>

      {/* Right image with blurred glow */}
      <div className="flex-1 flex justify-center items-center relative max-w-md md:max-w-none px-4 sm:px-0">
        {/* Blurred glow circle */}
        <div className="absolute w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl animate-pulse"></div>

        {/* Image container */}
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-8 ring-cyan-400 ring-opacity-50">
          <img
            src="./src/assets/portfolio-img1.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
