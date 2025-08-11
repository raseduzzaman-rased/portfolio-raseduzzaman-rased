import React from "react";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen max-w-7xl mx-auto pt-30 md:pt-20 px-8 sm:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between"
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
        <button className="w-full md:w-[125px] px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400 font-semibold hover:scale-105 transition-transform duration-300">
          Hire Me
        </button>
      </div>

      {/* Right image with blurred glow */}
      <div className="flex-1 flex justify-center items-center relative max-w-md md:max-w-none px-4 sm:px-0">
        {/* Blurred glow circle */}
        <div className="absolute w-80 h-80 rounded-full bg-cyan-400 opacity-20 blur-3xl animate-pulse"></div>

        {/* Image container */}
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-8 ring-cyan-400 ring-opacity-50">
          <img
            src="/src/assets/portfolio-img1.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
