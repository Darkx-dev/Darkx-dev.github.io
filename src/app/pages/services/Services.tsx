import React from "react";
import IconCube from "@/components/IconCube";
import IconDev from "@/components/IconDev";
import IconPrism from "@/components/IconPrism";

export default function Services() {
  return (
    <div className="flex flex-col gap-16 items-center py-20 max-auto">
      <h1 className="text-5xl font-bold text-white">What i do</h1>
      <ul className="grid grid-cols-3 max-sm:grid-cols-1 text-[#535353] text-4xl gap-20 max-sm:gap-10 w-[80%] max-sm:w-10/12 font-medium" id="what_i_do">
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
      <h1 className="text-5xl font-bold text-white">Skills</h1>
      <ul className="grid gap-22 grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:space-y-10 font-bold text-center bg-[#212121] w-[80%] p-16 border border-[#333333]">
        <li className="">
          <h1 className="text-[#4F4F4F] text-7xl">99%</h1>
          <span className="text-[#27AE60] text-2xl">HTML</span>
        </li>
        <li>
          <h1 className="text-[#4F4F4F] text-7xl">95%</h1>
          <span className="text-[#27AE60] text-2xl">CSS</span>
        </li>
        <li>
          <h1 className="text-[#4F4F4F] text-7xl">65%</h1>
          <span className="text-[#27AE60] text-2xl">Javascript</span>
        </li>
        <li>
          <h1 className="text-[#4F4F4F] text-7xl">75%</h1>
          <span className="text-[#27AE60] text-2xl">React</span>
        </li>
      </ul>
    </div>
  );
}


