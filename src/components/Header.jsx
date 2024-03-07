import React from "react";

export default function Header() {
  return (
    <div className="p-2 bg-background flex justify-between">
      <h1 className="text-primary text-4xl font-semibold">Welcome</h1>
      <h1 className="text-secondary text-4xl font-semibold">Projects</h1>
      <h1 className="text-primary text-4xl font-semibold">Hobbies</h1>
    </div>
  );
}
