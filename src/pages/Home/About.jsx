import React from "react";
import SectionTitle from "../../components/SectionTitle";

export default function About() {
  const skills = ["Javascript", "Node", "React", "Express", "PSQL", "MongoDB"];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/63f30038-7254-48ea-b3fc-6dd3361d15c6/xwHVWsvXtx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-primary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-secondary text-3xl">
          Here are some technologies that I work with
        </h1>
        <div className="flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <container
              key={index}
              className="border-solid border-white text-white py-2 px-12 rounded-md"
            >
              <h1 className="text-2xl text-primary">{skill}</h1>
            </container>
          ))}
        </div>
      </div>
    </div>
  );
}
