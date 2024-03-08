import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";
import About from "./About";
import Experience from "./Experience";

function Home() {
  return (
    <div className="bg-background px-40 sm:px-5">
      <Header />
      <div>
        <Introduction />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default Home;
