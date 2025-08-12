import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import animationData from "..//..//..//public/education.json";
import Lottie from "lottie-react";

const educations = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "World University of Bangladesh",
    duration: "2018 - 2022",
    location: "Uttara, Dhaka",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mirza Golam Hafiz Degree College",
    duration: "2016 - 2017",
    location: "Atwari, Panchagarh",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Atwari Model Pilot High School",
    duration: "2014 - 2015",
    location: "Atwari, Panchagarh",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-24 bg-[#2c2523] text-white"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        Education
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
        Education has always been the foundation of my professional journey.  
        Through continuous learning and dedication, I have equipped myself with the knowledge and skills necessary to excel in the tech industry.
      </p>

    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="relative border-l-4 border-cyan-400 ml-6 pl-8 space-y-12">
        {educations.map(({ degree, institution, duration, location }, index) => (
          <div key={index} className="relative">
            {/* Circle icon */}
            <div className="absolute -left-8 top-0 flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full shadow-lg">
              <FaGraduationCap className="text-white text-xl" />
            </div>

            {/* Content */}
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-orange-400">{degree}</h3>
              <p className="text-gray-300">{institution}</p>
              <p className="text-gray-400 italic">
                {duration} | {location}
              </p>
            </div>
          </div>
        ))}
      </div>
     
        <div className="w-72 h-72 rounded-lg ml-12">
      <Lottie animationData={animationData} loop={true} />
    </div>

     
    </div>
    </section>
  );
};

export default EducationSection;
