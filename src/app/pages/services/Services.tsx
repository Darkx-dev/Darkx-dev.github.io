import React from "react";
import IconCube from "@/components/IconCube";
import IconDev from "@/components/IconDev";
import IconPrism from "@/components/IconPrism";

export default function Services() {
  return (
    <div className="flex flex-col gap-10 items-center py-20 max-auto">
      <h1 className="text-5xl font-bold text-white">What i do</h1>
      <ul className="grid grid-cols-3 max-sm:grid-cols-1 text-[#535353] text-4xl gap-16 w-9/12 max-sm:w-10/12 ">
        <li className="flex flex-col gap-8 py-10 px-8 items-start bg-[#212121] border-b-4 border-opacity-0 hover:border-opacity-100 transition-colors border-[#27AE60]">
          <IconPrism />
          <span>
            Software <br /> Development
          </span>
        </li>
        <li className="flex flex-col gap-8 p-10 items-start bg-[#212121] border-b-4 border-opacity-0 hover:border-opacity-100 transition-colors border-[#27AE60]">
          <IconDev />
          <span>
            Web <br />
            Development
          </span>
        </li>
        <li className="flex flex-col gap-8 p-10 items-start bg-[#212121] border-b-4 border-opacity-0 hover:border-opacity-100 transition-colors border-[#27AE60]">
          <IconCube />
          <span>
            Web <br />
            Design
          </span>
        </li>
      </ul>
    </div>
  );
}
