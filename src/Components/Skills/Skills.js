import React, { useState, useEffect } from 'react';
import "./Skills.css"
import { motion } from 'framer-motion';
import icon1 from "../../images/icons_html_light.svg";
import icon2 from "../../images/icons_css_light.svg";
import icon3 from "../../images/icons_js_light.svg";
import icon4 from "../../images/icons_bs_light.svg";
import icon5 from "../../images/icons_figma_light.svg";
import icon6 from "../../images/icons_react_light.svg";
import icon7 from "../../images/icons_mongodb_light.svg";
import icon8 from "../../images/icons_sql_light.svg";
import icon9 from "../../images/icons_github_light.svg";
import icon10 from "../../images/icons_git_light.svg";
import icon11 from "../../images/icons_vs_light.svg";
import icon12 from "../../images/icons_python_light.svg";
import icon13 from "../../images/icons_mat_light.svg";
import icon14 from "../../images/icons_c_light.svg";
import icon15 from "../../images/icons_java_light.svg";
import icon16 from "../../images/icons_node_light.svg";

const Skills = () => {
    const skills = [
        {
            name: "HTML",
            bgColor :"",
            icon: icon1
        },
        {
            name: "CSS",
            bgColor :"",
            icon: icon2
        },
        {
            name: "JAVASCRIPT",
            bgColor :"",
            icon: icon3
        },
        {
            name: "BOOTSTRAP",
            bgColor :"",
            icon: icon4
        },
        {
          name: "FIGMA",
          bgColor :"",
          icon: icon5
        },
        {
          name: "REACT",
          bgColor :"",
          icon: icon6
        },
        {
          name: "NODEJS",
          bgColor :"",
          icon: icon16
        },
        {
          name: "MONGODB",
          bgColor :"",
          icon: icon7
        },
        {
          name: "MY_SQL",
          bgColor :"",
          icon: icon8
        },
        {
          name: "GITHUB",
          bgColor :"",
          icon: icon9
        },
        {
          name: "GIT",
          bgColor :"",
          icon: icon10
        },
        {
          name: "VSCODE",
          bgColor :"",
          icon: icon11
        },
        {
          name: "PYTHON",
          bgColor :"",
          icon: icon12
        },
        {
          name: "MATLAB",
          bgColor :"",
          icon: icon13
        },
        {
          name: "C",
          bgColor :"",
          icon: icon14
        },
        {
          name: "JAVA",
          bgColor :"",
          icon: icon15
        },
    ]  
    return (
      <section className="skills" id="Skills" data-scroll-section>
        <h2 className="head-text">Skills & Experience</h2>
        <div className="se_container">
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
          <div className="experience">
              <div className="timeline">
                <div className="line"></div>
                <div className="part">
                  <div className="bead"></div>
                  <div className="content">
                    <h2>APPLE DEVELOPERS GROUP | CORE MEMBER</h2>
                    <h3>DOMAIN : FRONTEND DEVELOPER</h3>
                    <h3>DEC 2020 - PRESENT | VIT,VELLORE</h3>
                    <p>
                      CONDUCTED A REACT SESSION
                      CONTRIBUTED IN RECRUITMENTS WEBSITE DEVELOPMENT
                      CONTRIBUTED IN ADG'S OFFICIAL WEBSITE
                      MADE THE ADG'S LINK TREE WEBSITE
                      CURRENTLY WORKING ON A CSS GENERATOR CHROME EXTENSION
                    </p>
                  </div>
                </div>
                <div className="part">
                  <div className="bead"></div>
                  <div className="content">
                    <h2>TECHNOLOGY AND GAMING CLUB | CORE MEMBER</h2>
                    <h3>DOMAIN : WEB DEVELOPMENT AND GAME MANAGEMENT</h3>
                    <h3>DEC 2020 - DEC 2021 | VIT,VELLORE</h3>
                    <p>
                    CONTRIBUTED IN INTRA CLUB GAMING TOURNAMENT
                    HOSTED A SERVER FOR CSGO(COUNTER STRIKE GLOBAL OFFENSIVE)
                    </p>
                  </div>
                </div>
                <div className="part">
                  <div className="bead"></div>
                  <div className="content">
                    <h2>SKILLSHIP VELLORE | CORE MEMBER</h2>
                    <h3>DOMAIN : WEB DEVELOPMENT</h3>
                    <h3>DEC 2020 - PRESENT | VIT,VELLORE</h3>
                    <p>
                       BASICS OF WEB DEVELOPMENT
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
};

export default Skills;