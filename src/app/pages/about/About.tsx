/* eslint-disable @next/next/no-img-element */
import React from "react";
import BulletMark from "@/components/BulletMark";

export default function About() {
  return (
    <div className="text-white flex flex-col items-center w-4/5 max-sm:w-full mx-auto gap-10 pt-20">
      <h1 className="text-5xl font-bold">About</h1>
      <p className="text-lg max-sm:text-base text-center w-2/3 max-sm:w-10/12 px-10 max-sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <ul className="flex w-full justify-evenly text-lg max-sm:text-sm max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:px-5 mt-5">
        <li className="flex flex-col items-center">
          <BulletMark/>
          <span className="font-bold mt-3 max-sm:m-0">Full Name</span>
          <span className="font-light">Roshan Kumar</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark/>
          <span className="font-bold mt-3 max-sm:m-0">Email Address</span>
          <span className="font-light">darkx.dev.23@gmail.com</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark/>
          <span className="font-bold mt-3 max-sm:m-0">Twitter</span>
          <span className="font-light">@MyTwitterHandle</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark/>
          <span className="font-bold mt-3 max-sm:m-0">Phone</span>
          <span className="font-light text-nowrap">+91 8804051###</span>
        </li>
      </ul>
    </div>
  );
}
