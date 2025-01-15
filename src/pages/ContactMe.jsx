import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import contactData from "../data/contactData.json";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useDarkMode } from "../context/DarkModeContext";

const icons = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaXTwitter,
  FaEnvelope: FaEnvelope,
};

const ContactMe = () => {
  const { darkMode } = useDarkMode();
  const [messageStatus, setMessageStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageStatus("success");
          setTimeout(() => setMessageStatus(null), 2000);
        },
        () => {
          setMessageStatus("error");
          setTimeout(() => setMessageStatus(null), 3000);
        }
      );

    e.target.reset();
  };

  const themeClasses = {
    main: darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900",
    card: darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900",
    heading: darkMode ? "text-teal-400" : "text-teal-600",
    subtext: darkMode ? "text-gray-400" : "text-gray-600",
    input: darkMode
      ? "bg-gray-700 border-gray-600 text-gray-300"
      : "bg-gray-200 border-gray-300 text-gray-700",
    button: darkMode
      ? "bg-teal-500 hover:bg-teal-600 text-white"
      : "bg-teal-600 hover:bg-teal-700 text-white",
  };

  return (
    <main
      className={`min-h-screen ${themeClasses.main} flex justify-center p-6`}
    >
      <div
        className={`max-w-3xl mx-auto rounded-lg shadow-lg p-6 md:p-10 transition-all duration-300 ease-in-out hover:shadow-2xl ${themeClasses.card}`}
      >
        <h1
          className={`text-3xl font-bold mb-6 text-center ${themeClasses.heading}`}
        >
          Let&apos;s Connect!
        </h1>
        <p className={`text-center mb-8 ${themeClasses.subtext}`}>
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          {contactData.map((contact, index) => {
            const Icon = icons[contact.icon];
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.5 }}
              >
                <Icon className={`text-4xl ${contact.color}`} />
                <span
                  className={`mt-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {contact.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-8">
          <h2
            className={`text-2xl font-semibold mb-4 text-center ${themeClasses.heading}`}
          >
            Or Send Me a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="from_name"
                className={`mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className={`p-2 rounded-lg border-2 ${themeClasses.input}`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="from_email"
                className={`mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                className={`p-2 rounded-lg border-2 ${themeClasses.input}`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className={`mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`p-2 rounded-lg border-2 ${themeClasses.input}`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${themeClasses.button}`}
            >
              Send Message
            </button>
          </form>
          {messageStatus === "success" && (
            <p className="mt-4 text-green-500 text-center">
              Message sent successfully!
            </p>
          )}
          {messageStatus === "error" && (
            <p className="mt-4 text-blue-500 text-center">
              Failed to send message, please try again.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactMe;
