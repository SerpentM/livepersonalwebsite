import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Contacts() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const cont =
    "Have a Project in mind ?? . Wanna work together ?? Then send me a message below Or you can also send an appreciation message,It's Up To you. Hope you have a lovely day.";
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
    <div ref={ref} id="contact" className="container-fluid contact">
      <motion.h1 animate={animation}>.contactMe( )</motion.h1>
      <motion.p animate={animation2}>{cont} </motion.p>
      <div class="container text-center">
        <motion.div class="row" animate={animation2}>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="Name" class="form-control" />
              </div>
              <div class="col-md-6">
                <input type="email" placeholder="Email" class="form-control" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <textarea
                  class="form-control textarea"
                  rows="4"
                  placeholder="Message"
                  type="text"
                />
              </div>
            </div>
            <div class="send-button mt-4">
              <Button color="secondary" variant="outlined">
                .send( ){" "}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;
