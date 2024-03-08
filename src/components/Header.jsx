import React from "react";

export default function Header() {
  return (
    <div className="p-2 bg-background flex justify-between">
      <button className="text-primary text-4xl font-semibold border-solid rounded-md bg-inherit px-20 py-3">
        Welcome
      </button>
      <button className="text-secondary text-4xl font-semibold border-solid rounded-md bg-inherit px-20 py-3">
        Projects
      </button>
      <button className="text-primary text-4xl font-semibold border-solid rounded-md bg-inherit px-20 py-3">
        Hobbies
      </button>
    </div>
  );
}
