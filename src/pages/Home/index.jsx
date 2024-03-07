import React from "react";
import Header from "../../components/Header";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="bg-background px-40">
      <Header />
      <div>
        <Introduction />
      </div>
    </div>
  );
}

export default Home;
