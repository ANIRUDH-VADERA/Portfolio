import './App.css';
import React,{useEffect,useState} from "react";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js"
import CustomCursor from "./CustomCursor";
import Loader from "./Components/Loader/Loader.js";

// import useLocoScroll from "./hooks/useLocoScroll.js";

function App() {
  
  const [down,setDown] = useState(false);
  
  const [preLoader,setPreLoader] = useState(false);

  // useLocoScroll(!preLoader);

  useEffect(()=>{
    setTimeout(()=>{
      setPreLoader(false);
    },3000);
  },[preLoader]);


  return (
     <>
      {/* <CustomCursor down={down} /> */}
      {preLoader? 
      <Loader />
      : 
      <div className="App main-container" id="main-container">
        <Navbar setDown={setDown} preLoader={preLoader}/>
        <Home />
      </div>
      }

    </>
  );
}

export default App;
