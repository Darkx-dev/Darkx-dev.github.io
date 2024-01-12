/* eslint-disable @next/next/no-img-element */
import React from "react";
import BulletMark from "@/components/BulletMark";

export default function About() {
  return (
    <div className="text-white flex flex-col items-center w-4/5 max-sm:w-full mx-auto gap-10 pt-20">
      <h1 className="text-5xl font-bold">About</h1>
      <p className="text-lg max-sm:text-base text-center w-2/3 max-sm:w-full max-lg:w-full px-10 max-sm:px-5">
        As a frontend web developer, I am dedicated to transforming creative
        concepts into captivating digital experiences. Proficient in HTML, CSS,
        and JavaScript, I prioritize clean and efficient code to ensure both
        visual appeal and optimal functionality. With a keen eye for design and
        a commitment to staying current with industry trends, I aim to craft
        seamless and user-friendly websites that make a lasting impact. Let my
        passion for frontend development elevate your digital presence.
      </p>
      <ul className="flex w-full justify-evenly text-lg max-sm:grid max-sm:grid-cols-1 max-sm:gap-10 max-sm:px-5 mt-5">
        <li className="flex flex-col items-center">
          <BulletMark />
          <span className="font-bold mt-3 max-sm:m-0">Full Name</span>
          <span className="font-light">Roshan Kumar</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark />
          <span className="font-bold mt-3 max-sm:m-0">Email Address</span>
          <span className="font-light">darkx.dev.23@gmail.com</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark />
          <span className="font-bold mt-3 max-sm:m-0">Twitter</span>
          <span className="font-light">@MyTwitterHandle</span>
        </li>
        <li className="flex flex-col items-center">
          <BulletMark />
          <span className="font-bold mt-3 max-sm:m-0">Phone</span>
          <span className="font-light text-nowrap">+91 8804051###</span>
        </li>
      </ul>
    </div>
  );
}
