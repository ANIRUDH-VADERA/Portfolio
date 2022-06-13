import React,{useState,useEffect,useRef} from 'react'
import "./Projects.css";
import projectImage1 from "../../images/projects_adg_recruitment.png";
import projectImage2 from "../../images/projects_quiz.png";
import projectImage3 from "../../images/projects_note.png";
import projectImage4 from "../../images/projects_links_web.png";
import projectImage5 from "../../images/projects_entertaintment.png";
import projectImage6 from "../../images/projects_dv.png";
import projectImage7 from "../../images/projects_chat.png";
import projectImage8 from "../../images/projects_ch_ext.png";
import projectImage9 from "../../images/projects_appa.png";
import projectImage10 from "../../images/projects_threejs.png";

const images = [
    {
      src:projectImage1,
      title: "ADG Recruitment Website",
      subtitle: "ADG(Apple Developers Group) VIT, Vellore",
      info: "",
    },
    {
      src:projectImage2,
      title: "Quiz App",
      subtitle: "A Quiz App With API Calling",
      info: "",
    },
    {
      src:projectImage3,
      title: "ADG Note Keeper App",
      subtitle: "So That You Dont Loose It ",
      info: "",
    },
    {
      src:projectImage4,
      title: "ADG Links Web Website",
      subtitle: "Getting you always connected with ADG",
      info: "",
    },
    // {
    //   src:projectImage5,
    //   title: "Entertaintment Hub",
    //   subtitle: "That's Where The Fun Begins.",
    //   info: "",
    // },
    // {
    //   src:projectImage6,
    //   title: "Space Exploration",
    //   subtitle: "Unravelling The Secrets Of Dark Matter",
    //   info: "",
    // },
    // {
    //   src:projectImage7,
    //   title: "Chat Application Using Sockets",
    //   subtitle: "Stay Connected",
    //   info: "",
    // },
    // {
    //   src:projectImage8,
    //   title: "Web Assist A Chrome Extension",
    //   subtitle: "Complex Websites? Web Assist For The Save",
    //   info: "",
    // },
    // {
    //   src:projectImage9,
    //   title: "ADG Appathon Website",
    //   subtitle: "App Development Hackathon, ADG VIT",
    //   info: "",
    // },
    // {
    //   src:projectImage10,
    //   title: "Landing Page Using Three.js",
    //   subtitle: "A Controllable 3D Landscape",
    //   info: "",
    // },
  ];
  
  function GalleryItem({
    src,
    info,
    subtitle,
    title,
    updateActiveImage,
    index,
  }) {
    return (
      <div
        className={"gallery-item-wrapper"}>
        <div></div>
        <div className={"gallery-item"}>
          <div className="gallery-item-info">
            <h1 className="gallery-info-title">{title}</h1>
            <h2 className="gallery-info-subtitle">{subtitle}</h2>
            {/* <p className="gallery-info-category">{category}</p> */}
          </div>
          <div
            className="gallery-item-image"
            style={{ backgroundImage: `url(${src})`}}
          ></div>
        </div>
        <div></div>
      </div>
    );
  }

function Projects() {

    const [activeImage, setActiveImage] = useState(1);

    const ref = useRef(null);


    const handleUpdateActiveImage = (index) => {
        setActiveImage(index + 1);
    };


    return (
        <section data-scroll-section  id="Projects" className="projects section-wrapper gallery-wrap">
            <div className="gallery" ref={ref}>
                <div className={"gallery-counter"}>
                    <span>{activeImage}</span>
                    <span className="divider" />
                    <span>{images.length}</span>
                </div>
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        index={index}
                        {...image}
                        updateActiveImage={handleUpdateActiveImage}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects