import { motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";
import AnimatedProfilePhoto from "../components/AnimatedProfilePhoto";

const About = () => {
  const { darkMode } = useDarkMode();

  const lines = [
    "Hi, I'm Nikesh Vishwakarma — a passionate Software Engineer from Mumbai who loves building for the web.",
    "I specialize in crafting full-stack applications using the MERN stack and .NET Core, with a focus on clean, responsive user experiences.",
    "From designing intuitive interfaces in React to building scalable APIs with Node.js and SQL, I enjoy bringing ideas to life through code.",
    "I’ve worked on real-world projects like a salon management system, e-commerce store with Stripe integration, and a movie dashboard using the TMDb API.",
    'I also share what I learn through <a target="_blank" href="https://medium.com/@nikeshvishwakarma33" class="text-teal-400 underline hover:text-teal-300">blog posts</a> and open-source projects on <a target="_blank" href="https://github.com/nikesh33" class="text-teal-400 underline hover:text-teal-300">GitHub</a>.',
    "I believe in continuous learning, clean code, and building with intention.",
    'If you’re looking to collaborate, work on a project, or just connect — <a href="/contact" class="text-teal-400 underline hover:text-teal-300">let’s talk</a>!',
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
