import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const ProfileCard = ({ aiDescription }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <motion.div
      className={`relative max-w-4xl mx-auto p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Icons */}
      <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
        <div className="p-2 rounded-full bg-blue-500 shadow-lg animate-bounce">
          <span className="text-xl text-white">💻</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
        <div className="p-2 rounded-full bg-green-500 shadow-lg animate-spin-slow">
          <span className="text-xl text-white">✨</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4">
        <div className="p-2 rounded-full bg-purple-500 shadow-lg animate-pulse">
          <span className="text-xl text-white">📚</span>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
        <div className="p-2 rounded-full bg-red-500 shadow-lg animate-ping">
          <span className="text-xl text-white">🚀</span>
        </div>
      </div>

      {/* Content */}
      <p
        className={`text-lg sm:text-xl lg:text-2xl ${
          darkMode ? "text-gray-300" : "text-gray-900"
        } leading-relaxed`}
      >
        I&apos;m <span className="text-blue-400 font-bold">Nikesh Vishwakarma</span>, a
        passionate <span className="text-green-400 font-bold">Full-Stack Developer</span> and
        <span className="text-blue-300 font-semibold"> Software Engineer</span>.
        I specialize in{" "}
        <span className="text-purple-300 font-semibold">frontend</span> and
        <span className="text-green-300 font-semibold"> backend</span> development.
      </p>

      {/* See More About Me Button */}
      <div className="mt-6">
        <button
          className={`${
            darkMode
              ? "bg-gradient-to-r from-blue-500 to-green-500"
              : "bg-teal-600 hover:bg-teal-700"
          } text-white font-bold py-2 px-4 rounded-full shadow-lg`}
          onClick={handleNavigation}
        >
          See More About Me
        </button>
      </div>

      {/* AI-based Dynamic Content */}
      <motion.p
        className="mt-6 text-gray-300 bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <span className="text-white font-semibold">Professional Summary:</span>{" "}
        {aiDescription || "Loading AI content..."}
      </motion.p>
    </motion.div>
  );
};

ProfileCard.propTypes = {
  aiDescription: PropTypes.string.isRequired,
};

export default ProfileCard;
