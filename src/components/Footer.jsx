import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
      } font-serif shadow-lg p-6`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center space-x-2 hover:underline bg-transparent border-none cursor-pointer mx-auto justify-end"
      >
        <ArrowUpIcon className="h-5 w-5" />
        <span>Back to Top</span>
      </button>

      <span className="block text-center text-sm mt-4">
        © 2025 Nikesh Vishwakarma. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
