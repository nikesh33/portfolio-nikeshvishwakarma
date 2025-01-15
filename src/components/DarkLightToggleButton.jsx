import { useDarkMode } from "../context/DarkModeContext";

const DarkLightToggleButton = ({ toggleDarkLightMode }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`relative inline-block w-16 h-8 transition duration-300 ease-in-out rounded-full cursor-pointer ${
        darkMode ? "bg-gray-600" : "bg-gray-300"
      }`}
      onClick={toggleDarkLightMode}
    >
      <span
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          darkMode ? "translate-x-8" : ""
        }`}
      ></span>
      <span
        className={`absolute left-1 top-1 w-6 h-6 flex items-center justify-center text-xs font-bold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {darkMode ? "🌙" : "🔆"}
      </span>
    </div>
  );
};

export default DarkLightToggleButton;
