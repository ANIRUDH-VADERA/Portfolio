import './App.css';
import React,{useEffect} from "react";
import Home from "./Components/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js"
import CustomCursor from "./CustomCursor";
function App() {
   return (
     <>
      {/* <CustomCursor /> */}
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
