/* eslint-disable @next/next/no-img-element */
import React from "react";
import BulletMark from "@/components/BulletMark";

export default function About() {
  return (
    <div className="text-white flex flex-col items-center w-4/5 max-sm:w-full mx-auto gap-10 pt-20">
      <h1 className="text-5xl font-bold">About</h1>
      <p className="text-lg max-sm:text-base text-center w-2/3 max-sm:w-full max-lg:w-full px-10 max-sm:px-5">
        As a passionate coder and web developer specializing in frontend
        technologies, I thrive on turning creative visions into seamless and
        visually stunning digital experiences. With a meticulous approach to
        coding and an eye for design, I am dedicated to crafting responsive and
        user-friendly websites that leave a lasting impression. Proficient in
        languages such as HTML, CSS, and JavaScript, I bring innovation to life
        by implementing cutting-edge frameworks and staying abreast of industry
        trends. My commitment to clean, efficient code ensures not only a
        polished appearance but also optimal functionality. By seamlessly
        blending aesthetics with functionality, I aspire to create immersive web
        solutions that captivate users and elevate the online presence of
        businesses and individuals alike. Let my skills and passion for frontend
        development be the driving force behind your next digital endeavor.
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
