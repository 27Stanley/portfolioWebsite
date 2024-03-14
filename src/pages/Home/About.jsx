import React from "react";
import SectionTitle from "../../components/SectionTitle";

export default function About() {
  const skills = [
    "Javascript",
    "Node",
    "React",
    "Express",
    "PSQL",
    "MongoDB",
    "TDD",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/63f30038-7254-48ea-b3fc-6dd3361d15c6/xwHVWsvXtx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-primary text-2xl">
            A creative tech enthusiast who is passionate about software
            development and computers.
          </p>
          <p className="text-primary text-xl">
            After completing my Bachelor's degree at Loguhborough University in
            2021 and working on computer hardware thereafter for about 1.5 years
            in Manchester, I have further embraced my interest in the IT field
            by successfully completing a programming course on a scholarship
            with Northcoders at the end 2023. I am particularly interested in
            building websites, problem solving code and assembling computer
            systems.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-secondary text-3xl">
          Here are some technologies that I've used:
        </h1>
        <div className="flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-solid border-white text-white py-2 px-12 rounded-md"
            >
              <h1 className="text-2xl text-primary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
