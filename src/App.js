import './App.css';
import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js"
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills.js";
import Education from "./Components/Education/Education.js";
import Work from "./Components/Work/Work.js";
import CustomCursor from "./CustomCursor";
import Loader from "./Components/Loader/Loader.js";
import useLocoScroll from "./hooks/useLocoScroll.js";

function App() {

  const [down, setDown] = useState(false);

  const [preLoader, setPreLoader] = useState(false);

  useLocoScroll(!preLoader);

  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 3000);
  }, [preLoader]);




  return (
    <>
      {/* <CustomCursor down={down} /> */}
      {preLoader ?
        <Loader />
        :
        <div className="App main-container" data-scroll-container id="main-container">
          {/* <Navbar setDown={setDown} preLoader={preLoader}/> */}
          <Home />
          <About />
          <Work />
          <Education />
          <Skills />
          {/* <Projects /> */}
        </div>
      }

    </>
  );
}

export default App;
