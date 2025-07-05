import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useDarkMode } from "../context/DarkModeContext";
import projectsData from "../data/projectsData.json";
import Pagination from "../components/Pagination";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const pulseAnimation = {
  scale: [1, 1.1, 1],
};

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  useEffect(() => {
    if (searchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchActive]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const containerStyles = darkMode
    ? "bg-gray-900 text-gray-200"
    : "bg-gray-100 text-gray-900";
  const titleStyles = darkMode ? "text-teal-500" : "text-teal-700";
  const projectCardStyles = darkMode
    ? "bg-gray-800 text-gray-300"
    : "bg-white text-gray-800";
  const techTagStyles = darkMode
    ? "bg-teal-900 text-teal-200"
    : "bg-teal-200 text-teal-800";
  const linkStyles = darkMode
    ? "hover:text-teal-300"
    : "hover:text-teal-700 underline";
  const iconClass = darkMode ? "text-white" : "text-gray-900";
  const inputStyles = darkMode
    ? "w-full bg-transparent text-white placeholder-gray-400 py-2 px-1 border-b-2 border-transparent focus:border-teal-500 transition-colors duration-300 outline-none"
    : "w-full bg-transparent text-gray-900 placeholder-gray-500 py-2 px-1 border-b-2 border-gray-300 focus:border-teal-500 transition-colors duration-300 outline-none";

  const lowerFilter = filter.toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const combinedText = (
      project.name +
      " " +
      project.description +
      " " +
      project.technologies.join(" ")
    ).toLowerCase();
    return combinedText.includes(lowerFilter);
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <main className={`min-h-screen ${containerStyles} p-6`}>
      <section className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center mb-8 space-x-2">
          <motion.button
            onClick={() => setSearchActive(true)}
            className={`${iconClass} focus:outline-none flex items-center`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={searchActive ? {} : pulseAnimation}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <FiSearch size={24} />
            {!searchActive && (
              <span className="ml-2 text-sm font-medium">Find It</span>
            )}
          </motion.button>
          <motion.div
            className="overflow-hidden"
            animate={{ width: searchActive ? "300px" : "0px" }}
            transition={{ duration: 0.3 }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search projects..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              onBlur={() => setSearchActive(false)}
              className={inputStyles}
            />
          </motion.div>
        </div>

        {!filter && (
          <h1
            className={`text-4xl font-bold text-center mb-8 ${titleStyles} font-poppins`}
          >
            Projects I&apos;ve Worked On
          </h1>
        )}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 ${projectCardStyles}`}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2
                className={`text-2xl font-semibold mt-4 ${titleStyles} font-poppins`}
              >
                {project.name}
              </h2>
              <p className="mt-2 text-sm font-poppins">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`py-1 px-3 rounded-full text-sm ${techTagStyles}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
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
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center mt-8 text-lg">
            No projects match your search.
          </p>
        )}

        {filteredProjects.length > projectsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </main>
  );
};

export default Projects;
