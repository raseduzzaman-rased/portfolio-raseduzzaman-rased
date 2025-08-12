import React from "react";
import { FaMapMarkerAlt, FaTools, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Archibo GmbH – IT Consultancy & Services",
    role: "Assitant Marketing Manager",
    duration: "Oct 2024 – Present",
    location: "Germany (Remote)",
    tools: ["Facebook", "LinkedIn", "Twitter", "Google Ads", "GTM", "GA4", "Heygen", "Wix", "WordPress"],
    achievements: [
      "Collaborated with international teams to execute marketing strategies.",
      "Optimized multi-channel ad campaigns increasing ROI by 30%.",
      "Implemented analytics tracking with GTM & GA4 for accurate insights.",
    ],
    layout: "details-left", 
  },
  {
    company: "DMLC IT Institute",
    role: "Mentor",
    duration: "May 2022 – March 2024",
    location: "Uttara, Dhaka",
    tools: ["Facebook Business Manager, Google Ad Account, Youtube GMC, Zoom, "],
    achievements: [
      "Mentored 200+ students on Digital Marketing.",
      "Developed course materials and project guidelines.",
      "Encouraged collaborative problem solving within student teams.",
    ],
    layout: "details-right", 
  },
  {
    company: "Fiverr",
    role: "Digital Marketer",
    duration: "Feb 2020 – Aug 2024",
    location: "Remote",
    tools: ["Social Meida Marketing", "Google Ads", "Google Merchant Center", "Web Analytics"],
    achievements: [
      "Completed 250+ projects with 5-star ratings.",
      "Built long-term client relationships through effective communication.",
      "Delivered data-driven marketing strategies tailored to client needs.",
    ],
    layout: "details-left", 
  },
];

const MyExperience = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto py-16 bg-[#2c2523] text-white px-2 sm:px-16 lg:px-24"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-6">
        My Experience
      </h2>
       <p className="text-center text-white mb-12 max-w-3xl mx-auto">
        Here is a summary of my professional journey showcasing my key roles and achievements in digital marketing and web development.
      </p>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 rounded-xl shadow-lg bg-[#3a3230] hover:shadow-[#fb9718]/50 transition-all duration-500 hover:-translate-y-1`}
          >
            {exp.layout === "details-left" ? (
              <>
                {/* Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-orange-400">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <p className="flex items-center text-sm text-gray-400 mt-1">
                    <FaMapMarkerAlt className="mr-2" /> {exp.location}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-cyan-400 font-semibold flex items-center">
                      <FaTools className="mr-2" /> Tools & Skills:
                    </h4>
                    <p className="text-gray-300">{exp.tools.join(", ")}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-cyan-400 font-semibold">
                      Achievements:
                    </h4>
                    <ul className="list-none mt-2 space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-300"
                        >
                          <FaCheckCircle className="mr-2 text-orange-400 mt-1" />{" "}
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Duration */}
                <div className="text-center md:border-l-4 border-orange-400 md:pl-6">
                  <p className="text-2xl font-semibold text-gray-100">
                    {exp.duration}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Duration */}
                <div className="text-center md:border-r-4 border-orange-400 md:pr-6">
                  <p className="text-2xl font-semibold text-gray-100">
                    {exp.duration}
                  </p>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-orange-400">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                  <p className="flex items-center text-sm text-gray-400 mt-1">
                    <FaMapMarkerAlt className="mr-2" /> {exp.location}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-cyan-400 font-semibold flex items-center">
                      <FaTools className="mr-2" /> Tools & Skills:
                    </h4>
                    <p className="text-gray-300">{exp.tools.join(", ")}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-cyan-400 font-semibold">
                      Achievements:
                    </h4>
                    <ul className="list-none mt-2 space-y-1">
                      {exp.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-300"
                        >
                          <FaCheckCircle className="mr-2 text-orange-400 mt-1" />{" "}
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyExperience;
