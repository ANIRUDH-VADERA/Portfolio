import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "./Work.css"
import about1 from "../../images/about01.png";
import about2 from "../../images/about02.png";
import about3 from "../../images/about03.png";
import about4 from  "../../images/about04.png";
import { MotionWrap } from '../../wrapper';

const Work = () => {
    const abouts = [
        {
            title: "Frontend Developer",
            description: "I am a frontend developer with a passion of developing amazing unique websites and giving the best user experience.",
            imgUrl: about1
        },
        {
            title: "Web Designer",
            description: "I like to create innovative designs and animations to create functional and beautiful web applications.",
            imgUrl: about2
        },
        {
            title: "React Developer",
            description: "I am also a React Developer with an experience of about 1 year who builds modern-day UI components to improvise application performance.",
            imgUrl: about3
        },
        {
            title: "Backend Developer",
            description: "I create, code, and improve the server, server-side applications, and databases that, when combined with front-end codes, help create a functional, seamless experience for the end-user.",
            imgUrl: about4
        }
    ]

  return (
    <section className="works" id="Work">
      <h2 className="head-text">The function of <span>Design</span> <br />is letting <span> Design function.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;