import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect, useRef } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { darkMode } = useDarkMode();
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Close sidebar if click is outside
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (isOpen) toggleSidebar(); // Close sidebar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar, isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-60 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } 
        transition-transform duration-300 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
            : "bg-gradient-to-r from-blue-600 to-blue-400 "
        }
        shadow-2xl z-10`}
    >
      {/* Close Button */}
      <button
        aria-label="Close Sidebar"
        className="absolute top-4 left-4 flex flex-col justify-between items-center w-8 h-8"
        onClick={toggleSidebar}
      >
        <span
          className={`h-1 w-full bg-white rounded-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-white rounded-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Links */}
      <nav className="mt-16 flex flex-col items-center space-y-4">
        {["Home", "About", "Projects", "Contact"].map((text) => (
          <NavLink
            key={text}
            to={`/${text.toLowerCase()}`}
            className={`px-4 py-2 rounded-lg ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            } bg-opacity-0 hover:bg-opacity-20 transition-all duration-200`}
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
