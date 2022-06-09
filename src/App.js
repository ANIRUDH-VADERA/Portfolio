import './App.css';
import React,{useEffect,useState} from "react";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js"
import CustomCursor from "./CustomCursor";

// import useLocoScroll from "./hooks/useLocoScroll.js";

function App() {
  
  const [down,setDown] = useState(false);
  
  // const [preLoader,setPreLoader] = useState(true);

  // useLocoScroll(!preLoader);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setPreLoader(false);
  //   },1000);
  // },[preLoader]);


  return (
     <>
      {/* <CustomCursor down={down} /> */}
      <div className="App main-container"  data-scroll-container id="main-container">
        <Navbar setDown={setDown} />
        <Home />
      </div>
    </>
  );
}

export default App;
