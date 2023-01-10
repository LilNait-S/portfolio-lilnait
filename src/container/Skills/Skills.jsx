import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const sortedExperiences = experiences.slice().sort((a, b) => a.year - b.year);
  const sortedSkills = skills.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <h2 className="head-text">Habilidades y <span>Experiencias</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {sortedSkills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div className="app__flex" style={{ backgroundColor: "#fff" }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text-skills">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {sortedExperiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text-white">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={experience._id}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      id={work.name}
                      key={work._key}
                    >
                      <h4 className="bold-text-white">{work.name}</h4>
                      <p className="p-text-exp">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      anchorId={work.name}
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}


        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "Habilidades",
  "app__whitebg"
);

