import React from "react";

export default function Footer() {
  return (
    <div className="flex w-full items-center sm:flex-col">
      <div className="flex flex-col gap-3 w-1/2 sm:w-full">
        <p className="text-primary text-xl">
          Linkedin: www.linkedin.com/in/927stanley
        </p>
        <p className="text-primary text-xl">
          Github: https://github.com/27Stanley
        </p>
      </div>
      <div className="h-[70vh] w-1/2 sm:w-full">
        <dotlottie-player
          src="https://lottie.host/4384c169-b121-4051-aa51-b65071d5aa69/sJD23c8kny.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}
