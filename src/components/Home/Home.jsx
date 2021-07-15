import React from "react";
import "./home.css";
import "./prashant.jpg";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const styles = {
  default: {
    borderRadius: 20
  }
};
function Home({ classes }) {
  const variant = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, delay: 1.2 }
    }
  };
  const variant2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const imgvariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [3, -3, 3, -3, 2, -2, 0],
      transition: {
        rotate: { delay: 5, duration: 3 },
        default: { delay: 4.5, duration: 1 }
      }
    }
  };

  return (
    <div id="home" class="container-fluid">
      <div className="row">
        <div className="col home-r">
          <motion.h1 initial="hidden" animate="visible" variants={variant}>
            Hello,
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variant2}
            transition={{ delay: 2 }}>
            I am Prashant <br></br>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={variant2}
              transition={{ delay: 3 }}>
              A frontend developer{" "}
            </motion.span>
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={variant2}
            transition={{ delay: 4 }}>
            <Button
              href="#contact"
              type="submit"
              size="large"
              variant="outlined"
              color="primary"
              className="button"
              classes={{
                root: classes.default,
                containedPrimary: classes.primary
              }}>
              Contact-Me
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="col home-l"
          variants={imgvariant}
          initial="hidden"
          animate="visible">
          <img src={require("./prashant.jpg").default} alt="Prashant" />
        </motion.div>
      </div>
    </div>
  );
}
export default withStyles(styles)(Home);
