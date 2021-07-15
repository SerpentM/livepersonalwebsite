import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
function TextImg(props) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  useEffect(() => {
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
    if (inView) {
      animation3.start({
        opacity: 1,
        transition: {
          duration: 1.4,
          delay: 0.8
        }
      });
    }
    if (!inView) {
      animation3.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <div ref={ref} className={props.cname}>
      <div className="col-lg-6 para">
        <motion.p animate={animation2}>{props.text}</motion.p>
      </div>
      <div className="col-lg-6 image">
        <motion.img src={props.image} animate={animation3} alt="Prashant" />
      </div>
    </div>
  );
}
export default TextImg;
