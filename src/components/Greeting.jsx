import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Greeting = () => {
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning!";
    else if (hours < 17) return "Good Afternoon!";
    else if (hours < 21) return "Good Evening!";
    else return "Good Night! Time to hit the hay!";
  };

  const greetingMessage = useMemo(getGreeting, []);
  const { darkMode } = useDarkMode();
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {showGreeting && (
        <motion.h2
          key="greeting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text ${
            darkMode
              ? "bg-gradient-to-r from-blue-500 to-green-500"
              : "bg-gradient-to-r from-blue-500 to-green-500"
          } animate-text mb-12`}
        >
          {greetingMessage}
        </motion.h2>
      )}
    </AnimatePresence>
  );
};

export default Greeting;
