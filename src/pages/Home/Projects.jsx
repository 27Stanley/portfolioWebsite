import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { useState } from "react";

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <main className="flex flex-col gap-5 border-l-2 border-[#76bdff] w-1/6 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={`project_${index}`}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-secondary border-secondary border-l-4 -ml-[4px] bg-[#ffffff36] py-3"
                    : "text-primary"
                }
                `}
              >
                {project.period}
              </h1>
            </div>
          ))}
        </main>
        <div className="flex flex-col gap-10">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex].title}
          </h1>
          <h1 className="text-primary text-2xl">
            {projects[selectedItemIndex].technologies}
          </h1>
          <h1 className="text-white text-xl">
            {projects[selectedItemIndex].description}
          </h1>
          <h1 className="text-white text-xl">
            {projects[selectedItemIndex].gitlink}
          </h1>
        </div>
      </div>
    </div>
  );
}
