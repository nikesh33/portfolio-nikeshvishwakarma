import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import AnimatedProfilePhoto from "../components/AnimatedProfilePhoto";

const About = () => {
  const { darkMode } = useDarkMode();

  const lines = [
    "I'm a Software Engineer graduated with a Bachelor of Engineering in Computer Science and Engineering from Mumbai University.",
    "I’m a passionate Full-Stack Developer.",
    'Built several self-learning projects, <a href="/projects" class="text-teal-400 underline hover:text-teal-300">learn more</a>',
    'Sharing knowledge about frontend development on <a target="blank" href="https://github.com/nikesh33" class="text-teal-400 underline hover:text-teal-300">Github</a>',
    'Writing technical blogs on <a target="blank" href="https://medium.com/@nikeshvishwakarma33" class="text-teal-400 underline hover:text-teal-300">Medium</a>',
    'Let’s talk about how we can collaborate!  <a href="/contact" class="text-teal-400 underline hover:text-teal-300">Connect</a>',
  ];

  return (
    <main
      className={`min-h-screen flex justify-center p-6 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
      aria-live="polite"
    >
      <section className="max-w-3xl mx-auto p-6 font-poppins">
        <h1
          className={`text-3xl font-bold text-center mb-8 ${
            darkMode ? "text-teal-500" : "text-teal-700"
          }`}
        >
          About Me
        </h1>

        <AnimatedProfilePhoto />

        <div
          className={`rounded-lg shadow-lg p-6 ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"
          }`}
        >
          <h1 className="text-3xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-teal-400">Nikesh Vishwakarma</span>
          </h1>
          <ul className="space-y-4 text-lg">
            {lines.map((line, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
