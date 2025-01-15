import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AIContent = ({ aiDescription }) => (
  <motion.p
    className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-xl shadow-lg transform transition-transform hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <span className="text-white font-semibold">AI Generated:</span>{" "}
    {aiDescription || "Loading AI content..."}
  </motion.p>
);

AIContent.propTypes = {
  aiDescription: PropTypes.string.isRequired,
};

const useFetchAIContent = () => {
  const [aiDescription, setAiDescription] = useState("");

  useEffect(() => {
    const aiResponses = [
      "I am a dedicated Full-Stack Developer with a passion for creating scalable, high-performance web applications.",
      "I specialize in designing and developing intuitive, user-friendly interfaces and robust back-end solutions.",
      "I have strong problem-solving skills, honed through hands-on experience with Data Structures and Algorithms using C++ and Python.",
      "Leveraging the latest frameworks and tools, I build seamless and responsive web applications.",
      "Crafting clean, maintainable, and efficient code is not just a practice—it's my principle.",
      "I thrive on solving complex problems, whether it's optimizing algorithms or debugging intricate systems.",
      "I love transforming concepts into functional applications that make an impact, blending creativity with technical excellence.",
      "Building web applications that combine beautiful design with exceptional performance is my forte.",
      "Every line of code I write is a step closer to turning dreams into digital realities.",
      "I have extensive knowledge of C++ and Python, which enables me to tackle computational challenges and implement efficient solutions.",
      "I believe in lifelong learning and continuously staying updated with cutting-edge technologies, from DSA to the latest web frameworks.",
      "I create web applications that are not only visually stunning but also deliver exceptional user experiences.",
      "Coding isn't just my job—it's my creative outlet and a way to empower businesses and users alike.",
      "From pixel-perfect front-end designs to optimized back-end architectures, I deliver end-to-end solutions.",
      "I turn challenges into opportunities, building web solutions that are as innovative as they are reliable.",
      "My goal is simple: to build web applications that delight users, drive business success, and solve real-world problems with efficient algorithms and robust code.",
    ];

    const loadAIContent = () => {
      setAiDescription(
        aiResponses[Math.floor(Math.random() * aiResponses.length)]
      );
    };

    loadAIContent();
    const intervalId = setInterval(loadAIContent, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return aiDescription;
};

export { AIContent, useFetchAIContent };
