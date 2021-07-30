import React from "react";
import "./contact.css";
import { Button } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { db } from "./firebase"

function Contacts() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();
  const cont = "Have a Project in mind ?? . Wanna work together ?? Then send me a message below Or you can also send an appreciation message,It's Up To you. Hope you have a lovely day.";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleEvent(e){
        e.preventDefault();
        db.collection('Message').add({
          name: name,
          emali: email,
          message: message,
        })
        .then(()=>{
          alert("I got your Message 😉, You're Awesome");
        })
        .catch(error => {alert(error.message);
        });
        setName('');
        setEmail('');
        setMessage('');
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        document.getElementById('textInput').value = '';

    }

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
        <form action="" method="post" onSubmit={handleEvent}>
        <motion.div class="row" animate={animation2}>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <input type="text" placeholder="Name" class="form-control" onChange ={(evt)=>{setName(evt.target.value);}} />
              </div>
              <div class="col-md-6">
                <input type="email" placeholder="Email" class="form-control" onChange ={(e)=>{setEmail(e.target.value);}}/>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <textarea
                  id="textInput"
                  class="form-control textarea"
                  rows="4"
                  placeholder="Message"
                  type="text"
                  onChange ={(e)=>{setMessage(e.target.value)}}
                />
              </div>
            </div>
            <div class="send-button mt-4">
              <Button color="secondary" variant="outlined" type="submit">
                .send( )
              </Button>
            </div>
          </div>
        </motion.div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
