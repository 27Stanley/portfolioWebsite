import React from "react";

export default function LeftSlider() {
  return (
    <div className="fixed left-0 bottom-0 px-10">
      <div className="flex flex-col items-center">
        <div className="divider"></div>
        <div className="flex flex-col gap-3 text-secondary">
          <i class="ri-github-fill text-2xl"></i>
          <i class="ri-linkedin-box-fill text-2xl"></i>
          <i class="ri-mail-line text-2xl"></i>
          <i class="ri-smartphone-line text-2xl"></i>
        </div>
        <div className="h-[40px] min-h-[0.2em]"></div>
        <div className="h-[230px] min-h-[1em] w-1 bg-neutral-100 dark:bg-white/10"></div>
      </div>
    </div>
  );
}
