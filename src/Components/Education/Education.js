import React,{useRef} from 'react'
import "./Education.css";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import asn from "../../images/asn.jpg";
import aps from "../../images/aps.jpg";
import vit from "../../images/vit.avif";
import timelineElements from "./timelineElements.js";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

function Education() {

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);
  

  return (
    <section className="education" data-scroll-section id="Education">
        <h1 className="title">Education</h1>
        <VerticalTimeline>
            {timelineElements.map((element)=>{
                
                let isWorkIcon = element.icon === "work";
                
                return(
                    <VerticalTimelineElement
                        key={element.key}
                        date = {element.date}
                        dateClassName = "date"
                        iconStyle = {isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon = {isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        className={cn("card")}
                    >
                        <div
                        className={cn("", { "is-reveal": onScreen })}
                        ref = {ref}
                        >
                                <div 
                                    className={cn("one")}
                                >
                                    <div className={cn("gallery-item-image")}>
                                        {element.school === "vit" && <img src={vit} />}
                                        {element.school === "asn" && <img src={asn} />}
                                        {element.school === "aps" && <img src={aps} />}
                                    </div>
                                    <div className="image_overlay image overlay_blur">
                                        <div className="overlay_title">
                                            <p className="image_description">
                                                <a
                                                className={`button ${
                                                    isWorkIcon ? "workButton" : "schoolButton"
                                                }`}
                                                href={element.buttonUrl}
                                                >
                                                    {element.buttonText}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="two">
                                    <h3 className="vertical-timeline-element-title">
                                        {element.title}
                                    </h3>
                                    <h5 className="vertical-timeline-element-subtitle">
                                        {element.location}
                                    </h5>
                                    <p id="description">{element.description}</p>
                                </div>
                        </div>
                    </VerticalTimelineElement>
                )    
            })}
        </VerticalTimeline>
    </section>
  )
}

export default Education;