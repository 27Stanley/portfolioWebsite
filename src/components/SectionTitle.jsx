import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-baseline py-10">
      <h1 className="tetx-3xl text-white font-semibold">{title}</h1>
      <div className="w-80 h-[1px] bg-primary"></div>
    </div>
  );
}
