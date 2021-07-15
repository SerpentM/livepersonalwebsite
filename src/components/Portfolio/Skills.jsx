import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LinearProgress from "@material-ui/core/LinearProgress";

function Skills(props) {
  const { ref, inView } = useInView({ threshold: 1 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5
        }
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [inView]);
  return (
    <div ref={ref} className="row">
      <motion.div className="col-6 skill" animate={animation}>
        {props.skill}
      </motion.div>
      <div className="col-6 prog">
        <LinearProgress
          variant={inView ? "buffer" : "indeterminate"}
          value={props.value}
          valueBuffer={props.value}></LinearProgress>
      </div>
    </div>
  );
}
export default Skills;
