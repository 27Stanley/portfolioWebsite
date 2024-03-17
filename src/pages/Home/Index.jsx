import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

import { motion, useInView, useAnimation } from "framer-motion";

function Home() {
  return (
    <div className="bg-background px-40 sm:px-5 !scroll-smooth">
      {/* <Header /> */}
      <div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            shown: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="shown"
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Introduction />
        </motion.div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Education />
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
