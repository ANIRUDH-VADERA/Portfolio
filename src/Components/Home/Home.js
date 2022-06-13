import Parallax from 'parallax-js'
import Typed from "typed.js";
import Button from "../Buttons/Button.js";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect }  from 'react'
import "./Home.css"
import bgImg from "../../images/background.png"
import rockImg from "../../images/rock.png";
import earthImg from "../../images/earth.png";
import midImg from "../../images/mid.png";
import foreImg from "../../images/foreground.png";;


function Home() {

  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        ' GAMER',
        ' CS ENGINEER',
        ' WEEB',
        ' WEB DEVELOPER',
        ' BINGE WATCHER',
        ' NIGHT CODER'
      ],
      startDelay: 300,
      backDelay: 1000,
      typeSpeed: 80,
      backSpeed: 80,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, []);

  useEffect(()=>{
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene); 
  },[]);

  return (
    <section id="sectionone" data-scroll-section className="screen">
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
          <div className="left"> 
            <h2 className="firsth2">Hey,i am</h2>
            <h1>ANIRUDH VADERA </h1>
            <h2>I am a <span className="toChange" ref={el}> </span></h2>
          </div>
        </div>
        <div data-depth="0.4" className="mid">
          <img src={midImg} alt="" />
        </div>
        <div data-depth="0.1" className="fore">
          <img src={foreImg} alt="" />
        </div>
      </div>
      <div className="right">
            <div className="wrapper socialMedia">
              <a href="https://www.facebook.com/anirudh.vadera.7/"><div className="button">
                  <div className="icon icon1">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <span>Facebook</span>
              </div></a>
              <a href="https://twitter.com/vadera_anirudh"><div className="button">
                  <div className="icon icon2">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <span>Twitter</span>
              </div></a>
              <a href="https://www.instagram.com/anirudhvadera/"><div className="button">
                  <div className="icon icon3">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <span>Instagram</span>
              </div></a>
              <a href="https://github.com/ANIRUDH-VADERA"><div className="button">
                  <div className="icon icon4">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <span>Github</span>
              </div></a>
              <a href="https://www.linkedin.com/in/anirudh-vadera-8836ba237/"><div className="button">
                  <div className="icon icon5">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <span>Linkedin</span>
              </div>  </a>   
              <a href="https://steamcommunity.com/id/BooGEYMaN___/"><div className="button">
                  <div className="icon icon6">
                    <i className="fa-brands fa-steam"></i>
                  </div>
                  <span>Steam</span>
              </div></a>
            </div>
          </div>
    </section>
  )
}

export default Home