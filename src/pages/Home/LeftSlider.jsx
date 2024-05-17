// import React from "react";

// export default function LeftSlider() {
//   return (
//     <div className="fixed left-0 bottom-0 px-10">
//       <div className="flex flex-col items-center">
//         <div className="flex flex-col gap-3 text-secondary">
//           <a href="https://github.com/27Stanley">
//             <i class="ri-github-fill text-2xl"></i>
//           </a>
//           <a href="https://www.linkedin.com/in/927stanley">
//             <i class="ri-linkedin-box-fill text-2xl"></i>
//           </a>
//           <a href="stanleyleung927@gmail.com">
//             <i class="ri-mail-line text-2xl"></i>
//           </a>
//           <a href="07519 560 660">
//             <i class="ri-smartphone-line text-2xl"></i>
//           </a>
//         </div>
//         <div className="h-[40px] min-h-[0.2em]"></div>
//         <div className="h-[230px] min-h-[1em] w-1 bg-neutral-100 dark:bg-white/10"></div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function LeftSlider() {
  function handleLinkClick(event, type) {
    event.preventDefault();
    if (type === "email" || type === "phone") {
      // Copy to clipboard
      const text = event.target.href || event.target.textContent;
      navigator.clipboard
        .writeText(text)
        .then(() => alert(`Copied ${text} to clipboard!`))
        .catch((err) => console.error("Failed to copy: ", err));
    }
  }

  return (
    <div className="fixed left-0 bottom-0 px-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 text-secondary">
          <a href="https://github.com/27Stanley">
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/927stanley">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
          <a
            href="mailto:stanleyleung927@gmail.com"
            onClick={(e) => handleLinkClick(e, "email")}
          >
            <i className="ri-mail-line text-2xl"></i>
          </a>
          <a
            href="tel:+447519560660"
            onClick={(e) => handleLinkClick(e, "phone")}
          >
            <i className="ri-smartphone-line text-2xl"></i>
          </a>
        </div>
        <div className="h-[40px] min-h-[0.2em]"></div>
        <div className="h-[230px] min-h-[1em] w-1 bg-neutral-100 dark:bg-white/10"></div>
      </div>
    </div>
  );
}
