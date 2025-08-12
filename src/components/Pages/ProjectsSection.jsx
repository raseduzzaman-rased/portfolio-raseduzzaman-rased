import React, { useState } from "react";
import Modal from "./Modal";
import project1 from '..//../assets/food-sharing.png'
import project2 from '..//../assets/blood-donate.png'
import project3 from '..//../assets/Conference-event.png'

const projects = [
  {
    title: "Food Sharing",
    image: project1,
    description:
      "A React-based web app for sharing available food with others. Users can view available food items, search for specific items, and view detailed information about each food.",
    tech: ["React", "JavaScript", "Tailwind CSS", "MongoDB"],
    liveLink: "https://food-sharing-website-efe15.web.app/",
    codeLink: "https://github.com/raseduzzaman-rased/food-sharing",
    details: `The Food Sharing Website is a community platform to reduce food waste by connecting those with surplus food to those in need. Built with React, Firebase, Node.js, and MongoDB, it supports adding, updating, managing, and requesting food items with secure user authentication and responsive design.

Challenges included implementing secure authentication with private routes, managing real-time data sync, handling image uploads safely, and designing a mobile-friendly interface.

Future improvements will focus on push notifications for updates, advanced search and filtering by expiry date and location, multi-factor authentication for added security, multilingual support, social sharing, and analytics to improve user experience and engagement.`,
  },
  {
    title: "Web Blood Donate",
    image: project2,
    description:
      "A MERN stack-based web application to connect blood donors with recipients efficiently, featuring donation requests, blog content, user management, and funding support.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    liveLink: "https://web-blood-donate.web.app/",
    codeLink: "https://github.com/raseduzzaman-rased/web-blood-donate",
    details: `The Blood Donation Application is a comprehensive MERN stack platform designed to connect blood donors, volunteers, and admins efficiently. It supports role-based access control, enabling smooth management of blood donation requests, user profiles, and content.

Key features include secure user registration with role assignment, donor management, real-time donation request handling, and an intuitive dashboard tailored for each user role (Admin, Donor, Volunteer). The app ensures seamless CRUD operations with sweet alerts, responsive UI across devices, and protected private routes with JWT authentication.

Challenges tackled include implementing complex role-based permissions, handling pagination and filtering in data tables, integrating environment variables for security, and building a responsive dashboard with a sidebar layout.

Future enhancements may include push notifications, multi-factor authentication, donation analytics, social sharing of blogs, and integration of Stripe payment for funding donations to support blood donation causes.`,
  },
  {
    title: "Conference Event",
    image: project3,
    description:
      "React single-page application enabling users to explore local conference events, register via email/password, Google sign-in, and access protected event details and user profiles.",
    tech: ["JavaScript", "React", "MongoDB", "Firebase"],
    liveLink: "https://a9-conference-event.netlify.app/",
    codeLink:
      "https://github.com/raseduzzaman-rased/conference-event-with-authentication",
    details: `The Conference Event platform is a React-based application designed to showcase upcoming technology conferences and summits, enabling users to explore events, learn from industry experts, and connect with like-minded professionals.

Key features include detailed event listings with information on dates, venues, entry fees, and descriptions to help attendees make informed decisions. The platform highlights diverse topics such as AI, cybersecurity, blockchain, startups, and digital transformation, reflecting the dynamic tech landscape.

Challenges addressed include building a responsive, user-friendly UI that organizes complex event data clearly, creating engaging sections like testimonials to build trust, and emphasizing networking and knowledge-sharing benefits for attendees.

Future enhancements may involve event registration and ticketing integration, personalized event recommendations, real-time updates, social sharing options, and advanced search and filtering capabilities to improve user engagement and experience.`,
  },
];

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-16 lg:px-24 bg-[#2c2523] text-white"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        My Projects
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        Here are some of the projects I have worked on recently, showcasing my
        skills in web development and design. Each project highlights a unique
        challenge and solution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#3a3230]  rounded-lg p-5 shadow-lg hover:shadow-[#fb9718]/50 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 object-center h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3 text-justify">
              {project.description}
            </p>
            <div className="mb-3">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="inline-block bg-cyan-500 hover:bg-orange-400 text-black text-xs font-semibold px-1.5 py-1 mr-2 rounded my-2"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-orange-400 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-orange-400 transition-colors"
                >
                  Source Code
                </a>
              )}
              <button
                onClick={() => openModal(project)}
                className="text-cyan-400 hover:text-orange-400 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal component call */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.title}
        description={selectedProject?.description}
        details={selectedProject?.details}
        image={selectedProject?.image}
      />
    </section>
  );
};

export default ProjectsSection;
