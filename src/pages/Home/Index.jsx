import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.25 },
      });
      slideControls.start({
        x: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="bg-background px-40 sm:px-5 !scroll-smooth">
      {/* <Header /> */}
      <div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            shown: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Introduction />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            shown: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <About />
        </motion.div>

        <motion.div>
          <Experience />
        </motion.div>

        <motion.div>
          <Projects />
        </motion.div>

        <motion.div>
          <Education />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
