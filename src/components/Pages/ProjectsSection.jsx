import React from "react";

const projects = [
  {
    title: "Food Sharing",
    image: "/src/assets/food-sharing.png",
    description: "A React-based web app for sharing available food with others. Users can view available food items, search for specific items, and view detailed information about each food.",
    tech: ["React", "JavaScript", "Tailwind CSS", "MongoDB"],
    liveLink: "https://food-sharing-website-efe15.web.app/",
    codeLink: "https://github.com/raseduzzaman-rased/food-sharing",
  },
  {
    title: "Web Blood Donate",
    image: "/src/assets/blood-donate.png",
    description: "A MERN stack-based web application to connect blood donors with recipients efficiently, featuring donation requests, blog content, user management, and funding support.",
    tech: [ " JavaScript", "React", "Node.js", "MongoDB"],
    liveLink: "https://web-blood-donate.web.app/",
    codeLink: "https://github.com/raseduzzaman-rased/web-blood-donate",
  },
  {
    title: "Conference Event",
    image: "/src/assets/Conference-event.png",
    description: "React single-page application enabling users to explore local conference events, register via email/password, Google sign-in, and access protected event details and user profiles.",
    tech: [ " JavaScript", "React", "MongoDB", "Firebase", ],
    liveLink: "https://a9-conference-event.netlify.app/",
    codeLink: "https://github.com/raseduzzaman-rased/conference-event-with-authentication",
  },

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-16 px-4 sm:px-16 lg:px-24 bg-[#2c2523] text-white">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">My Projects</h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
  Here are some of the projects I have worked on recently, showcasing my skills in web development and design.  
  Each project highlights a unique challenge and solution.
</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ title, image, description, tech, liveLink, codeLink }, index) => (
          <div key={index} className="bg-[#3a3230] rounded-lg p-5 shadow-lg hover:shadow-[#fb9718]/50 transition-shadow duration-300">
            <img src={image} alt={title} className="rounded-md mb-4 object-center h-48 w-full" />
            <h3 className="text-xl font-semibold mb-2 text-orange-400">{title}</h3>
            <p className="text-gray-300 mb-3 text-justify">{description}</p>
            <div className="mb-3">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="inline-block bg-cyan-500 text-black text-xs font-semibold px-1.5 py-1 mr-2 rounded"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-orange-400 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {codeLink && (
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-orange-400 transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;