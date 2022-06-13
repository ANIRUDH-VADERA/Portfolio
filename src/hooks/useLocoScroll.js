import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector("#main-container");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    // const nav = document.querySelector(".navbar");
    // const NavTop = nav.offsetTop;
    // const headerLogo = document.querySelector(".headerLogo");
    // const navbarHeadingMain = document.querySelector(".navbarHeadingMain");
    // locoScroll.on("scroll",(instance)=>{
    //     if(instance.scroll.y >= NavTop){
    //         // props.setDown(true);
    //         document.body.style.paddingTop = nav.offsetHeight + "px";
    //         document.body.classList.add("fixed-nav");
    //         headerLogo.classList.add("none1");
    //         navbarHeadingMain.classList.add("none1");
    //       }else {
    //         // props.setDown(false);
    //         document.body.style.paddingTop = 0;
    //         document.body.classList.remove("fixed-nav");
    //         headerLogo.classList.remove("none1");
    //         navbarHeadingMain.classList.remove("none1");
    //     }
    // });

  }, [start]);
}