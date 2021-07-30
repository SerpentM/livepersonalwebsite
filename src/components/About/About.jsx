import React from "react";
import TextImg from "./TextImg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./about.css";

function About() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
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
  }, [inView]);
  const about1 =
    "I am an IT student currently pursuing Bachelor's degree from Kirti College Dadar. I am a strong believer of Tech and Obsession of how it forms deep root in our life. Google is my companion I usually Forget things easily and for a developer Internet is everything. But I am a Quick Learner, I grasp things quickly and try to practically implement them. I am a very practical person but theories fascinates me because, ''Imagination Is the Only Limitation we have''.";
  const about2 =
    "Although I constantly talk about Updating oneself. I am an all rounder kinda person, you can talk to me about anything, If I put my mind to anything I can develop Interest. I don't exactly know what my passion is maybe I just like trying new things, maybe trying new things is my passion. And I never hesitate to try or to say no to things that are out of my cerebral border.";
  return (
    <div ref={ref} id="about" className="container-fluid about">
      <motion.h1 animate={animation}>.aboutMe( )</motion.h1>

      <div>
        <TextImg text={about1} image={require('./images/pras2.jpg').default} cname="row" />
        <TextImg
          text={about2}
          image={require("./images/pras1.jpeg").default}
          cname="row row2"
        />
      </div>
    </div>
  );
}

export default About;
