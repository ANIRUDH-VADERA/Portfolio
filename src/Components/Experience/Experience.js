import React from 'react'
import "./Experience.css"
import { ReactComponent as SchoolIcon } from "../../images/school.svg";
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import cn from "classnames";
import experienceElements from "./experienceElements.js";
import adg from "../../images/adg.png";
import skillship from "../../images/skillship.png";
import tag from "../../images/tag.png";

function Experience() {

    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section className="experience" data-scroll-section id="Experience">
        <h1>Experience</h1>
        <div className="experience">
        <VerticalTimeline>
        {experienceElements.map((element)=>{
            
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
                    <div>
                            <div 
                                className={cn("one")}
                            >
                                <div className={cn("gallery-item-image")}>
                                    {element.school === "adg" && <img src={adg} />}
                                    {element.school === "tag" && <img src={tag} />}
                                    {element.school === "skillship" && <img src={skillship} />}
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
                                                View Website
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
                                {element.description.map((desc)=>{
                                return (<p id="description">{desc}</p>)
                                })}
                            </div>
                    </div>
                </VerticalTimelineElement>
            )
        })}
        </VerticalTimeline>
    </div>
  </section>
  )
}

export default Experience