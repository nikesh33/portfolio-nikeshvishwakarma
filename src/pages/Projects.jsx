import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import projectsData from "../data/projectsData.json";

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // Dark and light mode styles
  const containerStyles = darkMode
    ? "bg-gray-900 text-gray-200"
    : "bg-gray-100 text-gray-900";
  const titleStyles = darkMode
    ? "text-teal-500"
    : "text-teal-700";
  const projectCardStyles = darkMode
    ? "bg-gray-800 text-gray-300"
    : "bg-white text-gray-800";
  const techTagStyles = darkMode
    ? "bg-teal-900 text-teal-200"
    : "bg-teal-200 text-teal-800";
  const linkStyles = darkMode
    ? "hover:text-teal-300"
    : "hover:text-teal-700 underline";

  return (
    <main className={`min-h-screen ${containerStyles} p-6`}>
      <section className="max-w-fit mx-auto">
        <h1 className={`text-3xl font-bold text-center mb-8 ${titleStyles} font-poppins`}>
          Projects I've Worked On
        </h1>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 ${projectCardStyles}`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className={`text-xl font-semibold mb-2 ${titleStyles} font-poppins`}>
                {project.name}
              </h2>
              <p className="text-sm mb-4 font-poppins">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="font-semibold">Technologies:</span>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`py-1 px-3 rounded-full text-sm ${techTagStyles}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center relative z-10">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-teal-500 font-semibold transition ${linkStyles}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-teal-500 font-semibold transition ${linkStyles}`}
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
