import React, { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaPython,
  FaMicrosoft,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import skillsData from "../data/skills.json";

const icons = {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaPython,
  FaMicrosoft,
  FaJsSquare,
  FaNodeJs,
};

const SkillCard = () => {
  const [skills, setSkills] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;

  useEffect(() => {
    const loadedSkills = skillsData.map((skill) => ({
      ...skill,
      icon: icons[skill.icon],
    }));
    setSkills(loadedSkills);
  }, []);

  const displayedSkills = showAll ? skills : skills.slice(0, initialCount);

  return (
    <div>
      <h2 className="mt-10 mb-8 text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center">
        My Tech Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedSkills.map((skill) => (
          <div
            key={skill.title}
            className="transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <FeatureCard
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          </div>
        ))}
        {skills.length > initialCount && (
          <div className="col-span-full flex justify-center">
            <div
              className="w-full max-w-xs flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setShowAll(!showAll)}
            >
              <span className="w-full text-center text-gray-600 font-bold">
                {showAll
                  ? "Show Less"
                  : `+ ${skills.length - initialCount} More`}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
