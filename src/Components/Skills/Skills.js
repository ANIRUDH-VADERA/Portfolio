import React, { useState, useEffect } from 'react';
import "./Skills.css"
import { motion } from 'framer-motion';
// import icon1 from "../../images/icon1.png";
// import icon2 from "../../images/icon1.png";
// import icon3 from "../../images/icon1.png";
// import icon4 from "../../images/icon1.png";
// import icon5 from "../../images/icon1.png";
// import icon6 from "../../images/icon1.png";
// import icon7 from "../../images/icon1.png";
// import icon8 from "../../images/icon1.png";
// import icon9 from "../../images/icon1.png";
// import icon10 from "../../images/icon1.png";
// import icon11 from "../../images/icon1.png";
// import icon12 from "../../images/icon1.png";


const Skills = () => {
    const skills = [
        {
            name: "Node JS",
            bgColor :" #fff",
            icon: ""
        },
    ]  
    return (
      <section className="skills" id="Skills">
        <h2 className="head-text">Skills</h2>
        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
};

export default Skills;