import React from "react";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./port.css";
function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const prtCon =
    "Technology and Science runs cooperatively with each other, Discovery in any one of them might result benefiting other like Artificial Intelligence detecting type of cancer and its aggressive nature at early stag or discovery of Transistors resulting a powerful Virtual Mind in our human hands, The examples are endless and I belive that there is no end to discoveries and You, I and Humanity needs a constant Update. Like I do to myself, I tend to upgrade my self constantly. Below are some of my skills.";
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4
        }
      });
    }
    if (!inView) {
      animation.start({ x: -1000 });
    }
    if (inView) {
      animation2.start({
        opacity: 1,
        transition: {
          duration: 1.4,
          delay: 0.2
        }
      });
    }
    if (!inView) {
      animation2.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} id="portfolio" className="container-fluid portfolio">
      <motion.h1 animate={animation}>.portFolio( )</motion.h1>
      <motion.p animate={animation2}>{prtCon}</motion.p>
      <Skills skill="Html, JS, Css" value="80"></Skills>
      <Skills skill="Nodejs, Express" value="50"></Skills>
      <Skills skill="React" value="65"></Skills>
      <Skills skill="React-Native" value="30"></Skills>
      <Skills skill="GitHub, Git Version Control" value="40"></Skills>
      <Skills skill="Python" value="65"></Skills>
      <Skills skill="C, C++" value="40"></Skills>
      <Skills skill="C#, .NET" value="20"></Skills>
      <Skills skill="Java" value="20"></Skills>
      <Skills skill="DataStructure & Algorithms" value="20"></Skills>
    </motion.div>
  );
}

export default Portfolio;
