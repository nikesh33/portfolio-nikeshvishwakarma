import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      className={`max-w-sm mx-auto p-6 rounded-lg border transition-transform duration-500 ease-in-out ${
        darkMode
          ? "bg-gray-900/20 text-gray-100 border-gray-700"
          : "bg-gray-100 text-gray-800 border-gray-300 hover:border-gray-400 backdrop-blur-lg"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mb-4 text-center">
        <Icon
          className={`text-4xl mb-4 mx-auto ${
            darkMode ? "text-green-500" : "text-green-600"
          }`}
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-base leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
