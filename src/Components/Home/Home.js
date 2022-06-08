import Parallax from 'parallax-js'
import React, { useEffect }  from 'react'
import "./Home.css"
import bgImg from "../../images/background.png"
import rockImg from "../../images/rock.png";
import earthImg from "../../images/earth.png";
import midImg from "../../images/mid.png";
import foreImg from "../../images/foreground.png";;

function Home() {

  useEffect(()=>{
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene); 
  },[]);

  return (
    <section id="sectionone" className="screen">
      <div id="scene">
        <div data-depth="0.1" className="bg">
          <img src={bgImg} alt="" />
        </div>
        <div data-depth="0.2" className="rock1">
          <img src={rockImg} alt="" />
        </div>
        <div data-depth="1.2" className="earth">
          <img src={earthImg} alt="" />
        </div>
        <div data-depth="0.1" className="text">
          <h1>PLANETS</h1>
        </div>
        <div data-depth="0.4" className="mid">
          <img src={midImg} alt="" />
        </div>
        <div data-depth="0.1" className="fore">
          <img src={foreImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home