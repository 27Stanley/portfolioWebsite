import React from "react";

export default function Introduction() {
  return (
    <div className="h-[100vh] bg-background flex flex-col items-start justify-center gap-5">
      <h1 className="text-primary h-1"> Hiya, my name is</h1>
      <h1 className="text-secondary text-9xl sm:text-3xl font-semibold h-16">
        {" "}
        Stanley
      </h1>
      <h1 className="text-white text-7xl sm:text-2xl font-semibold h-10 sm:w-full">
        I'm an aspiring software developer
      </h1>
      {/* <p className="text-primary w-1/2 sm:w-full">
        After completing an intense bootcamp course with Northcoders in
        Manchester, I have now relocated to London to pursue a career in
        software development{" "}
      </p> */}

      {/* <button className="border-5 border-primary text-white bg-inherit px-10 py-5 rounded text-2xl font-semibold">
        Enter
      </button> */}
    </div>
  );
}
