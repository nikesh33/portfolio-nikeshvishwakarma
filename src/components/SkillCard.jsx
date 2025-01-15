import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaCode, FaServer, FaDatabase, FaCogs, FaPython } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import skillsData from "../data/skills.json";

const icons = {
  FaLaptopCode: FaLaptopCode,
  FaCode: FaCode,
  FaServer: FaServer,
  FaDatabase: FaDatabase,
  FaCogs: FaCogs,
  FaPython: FaPython,
};

const SkillCard = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Load skills dynamically (if fetching from an API, replace with API call)
    const loadedSkills = skillsData.map((skill) => ({
      ...skill,
      icon: icons[skill.icon],
    }));
    setSkills(loadedSkills);
  }, []);

  return (
    <div>
      <h2 className="mt-10 mb-8 text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 text-center">
        My Tech Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
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
      </div>
    </div>
  );
};

export default SkillCard;
