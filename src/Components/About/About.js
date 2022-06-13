import React from 'react';
import "./About.css";
import anirudh from "../../images/anirudh.jpg";

function About() {
  return (
    <section className="About Profile" data-scroll-section id="Profile">
        <div className="headings" >
            <h1>Profile</h1>
            <p>I am a creative Web Developer</p>
        </div>
        <div className="Content">
            <div className="a">
                <h2>About Me</h2>
                <p>I am a Sophomore at Vellore Institute of Technology, Vellore, pursuing B.Tech in Computer Science. I am an FullStack Web Developer. I am a senior programmer with good knowledge of front-end techniques who loves structure and order and I also stand for quality. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'. With all that I am a hardcore gamer and a binge watcher too.</p>
            </div>
            <div className="b">
                <img src={anirudh} className="b" alt="" />
            </div>

            <div className="c">
                <h2>Details</h2>
                <h6>Name:<span>    Anirudh Vadera</span></h6>
                <h6>Age:<span>    19 years</span></h6>
                <h6>Location:<span>    Lucknow,UP,India</span></h6>
                <h6>Contact Number:<span>    +91 7905872006</span></h6>
                <h6>Email:<span>    anirudhvadera@gmail.com</span></h6>
            </div>
        </div>
  </section>

  )
}

export default About;