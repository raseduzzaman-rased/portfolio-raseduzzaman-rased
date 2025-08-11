import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={50} />, name: "HTML" },
  { icon: <FaCss3Alt size={50} />, name: "CSS" },
  { icon: <SiTailwindcss size={50} />, name: "Tailwind CSS" },
  { icon: <FaJsSquare size={50} />, name: "JavaScript" },
  { icon: <FaReact size={50} />, name: "React" },
  { icon: <FaNodeJs size={50} />, name: "Node.js" },
  { icon: <SiExpress size={50} />, name: "Express.js" },
  { icon: <SiFirebase size={50} />, name: "Firebase" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
  { icon: <FaGitAlt size={50} />, name: "Git & GitHub" },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto p-8 bg-[#2c2523] text-white rounded-lg"
    >
      <h2 className="text-4xl josefin-sans font-bold text-cyan-400 mb-4 text-center">
        My Skills
      </h2>
      <p className="text-center text-white text-lg mb-10 max-w-xl mx-auto">
        These are some of the technologies I work with daily to build modern web
        applications.
      </p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mx-auto">
        {skills.map(({ icon, name }, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center cursor-pointer"
            title={name}
          >
            <div className="text-cyan-400 hover:text-orange-400 transition-colors duration-300">
              {icon}
            </div>
            <span className="mt-2 text-sm text-transparent group-hover:text-white transition-colors duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
