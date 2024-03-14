import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-background px-40 sm:px-5">
      {/* <Header /> */}
      <div>
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Education />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
