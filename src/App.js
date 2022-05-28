import './App.css';
import React,{useEffect} from "react";

import Navbar from "./Components/Navbar/Navbar.js"
import CustomCursor from "./CustomCursor";
function App() {
   return (
     <>
      {/* <CustomCursor /> */}
      <div className="App">
        <Navbar />
      </div>
    </>
  );
}

export default App;
