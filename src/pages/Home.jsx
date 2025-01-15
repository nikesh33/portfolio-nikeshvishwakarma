import ProfileCard from "../components/ProfileCard";
import contactData from "../data/contactData.json";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Greeting from "../components/Greeting";
import SkillCard from "../components/SkillCard";
import { useFetchAIContent } from "../components/AIContent";
import { useDarkMode } from "../context/DarkModeContext";

const Home = () => {
  const aiDescription = useFetchAIContent();
  const { darkMode } = useDarkMode();

  const iconComponents = {
    FaGithub,
    FaLinkedin,
    FaTwitter: FaXTwitter,
    FaEnvelope,
  };

  const gradientClass = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gray-100";

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`flex flex-col min-h-screen ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
            : "bg-gray-100 text-gray-900"
        } font-sans`}
      >
        <main className="flex flex-col items-center justify-center flex-1">
          <section className={`w-full py-20 ${gradientClass}`}>
            <div className="max-w-screen-xl mx-auto text-center px-6 sm:px-12">
              <Greeting />
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ProfileCard
                  darkMode={darkMode}
                  aiDescription={aiDescription}
                />
              </motion.div>
              <SkillCard darkMode={darkMode} />
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-6">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text ${
                    darkMode
                      ? "bg-gradient-to-r from-blue-500 to-green-500"
                      : "bg-gradient-to-r from-blue-500 to-green-500"
                  }`}
                >
                  Let's Connect!
                </h1>
                <p className="text-lg md:text-xl max-w-lg mx-auto">
                  Catch me on any of the platforms below!
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                  {contactData.map((contact, index) => {
                    const Icon = iconComponents[contact.icon];
                    return (
                      <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center"
                      >
                        <Icon className={`text-4xl ${contact.color}`} />
                        <span className="text-lg">{contact.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
