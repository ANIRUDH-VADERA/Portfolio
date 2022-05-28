import React, { useEffect } from 'react'
import "./Navbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import navbarLogo from "../../images/logo.jpg"


function Navbar() {
  
    useEffect(() => {
        const nav = document.querySelector(".navbar");
        const NavTop = nav.offsetTop;
        const onScroll = () => {
            if(window.scrollY >= NavTop){
                document.body.style.paddingTop = nav.offsetHeight + "px";
                document.body.classList.add("fixed-nav");
                document.querySelector(".navbarLogo").classList.add("none");
              }else {
                document.body.style.paddingTop = 0;
                document.body.classList.remove("fixed-nav");
                document.querySelector(".navbarLogo").classList.remove("none");
            }
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  
    // useEffect(() => {
    //     const headerLogo = document.querySelector(".headerLogo");
    //     const navbarHeadingMain = document.querySelector(".navbarHeadingMain");
    //     const onLoad = () => {
    //         headerLogo.classList.add("new");
    //         navbarHeadingMain.classList.remove("none");
    //     };
    //     // clean up code
    //     window.removeEventListener('load', onLoad);
    //     window.addEventListener('load', onLoad, { passive: true });
    //     return () => window.removeEventListener('load', onLoad);
    // }, []);

    return (
    <>
        <div className="navbarLogo">
            <img alt="navbar_img" class="headerLogo" src = {navbarLogo} />
            <h1 className="navbarHeadingMain none">ANIRUDH VADERA</h1>
        </div>
        <div className="navbar" id="navbar">
                <div className="navbarItemLogo logo">
                    <a href="#"><img alt="navbar_img" src = {navbarLogo} /></a>
                </div>
                <div className="navbarItems">
                    <div className="navbarItem"><a href="#"><h2 className="navbarHeading">Home</h2></a></div>
                    <div className="navbarItem"><a href="#"><h2 className="navbarHeading">About</h2></a></div>
                    <div className="navbarItem"><a href="#"><h2 className="navbarHeading">Projects</h2></a></div>
                    <div className="navbarItem"><a href="#"><h2 className="navbarHeading">Skills</h2></a></div>
                  <div className="navbarItem"><a href="#"><h2 className="navbarHeading">Contact</h2></a></div>
                </div>
            {/* <FontAwesomeIcon icon={solid('house')} /> */}
        </div>
    </>
  )
}

export default Navbar