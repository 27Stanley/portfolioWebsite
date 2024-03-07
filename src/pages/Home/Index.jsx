import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";
import About from "./About";

function Home() {
  return (
    <div className="bg-background px-40">
      <Header />
      <div>
        <Introduction />
        <About></About>
      </div>
    </div>
  );
}

export default Home;
