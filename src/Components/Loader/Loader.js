import React from 'react'
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
        <div className="about">
            <a className="bg_links social portfolio" href="https://www.instagram.com/anirudhvadera/" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social dribbble" href="https://github.com/ANIRUDH-VADERA" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links social linkedin" href="https://www.linkedin.com/in/anirudh-vadera-8836ba237/" target="_blank">
                <span className="icon"></span>
            </a>
            <a className="bg_links logo"></a>
        </div>

        <div className="content">
            <div className="planet">
                <div className="ring"></div>
                    <div className="cover-ring"></div>
                <div className="spots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>
            <p>Loading...</p>
        </div>
    </div>
  )
}

export default Loader