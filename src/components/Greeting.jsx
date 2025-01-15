import { motion } from "framer-motion";
import { useMemo } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Greeting = () => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning!";
    else if (hours < 18) return "Good Afternoon!";
    else return "Good Evening!";
  };

  const greetingMessage = useMemo(getGreeting, []);
  const { darkMode } = useDarkMode();

  return (
    <motion.h2
      className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text ${
        darkMode
          ? "bg-gradient-to-r from-blue-500 to-green-500"
          : "bg-gradient-to-r from-blue-500 to-green-500"
      } animate-text mb-12`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {greetingMessage}
    </motion.h2>
  );
};

export default Greeting;
