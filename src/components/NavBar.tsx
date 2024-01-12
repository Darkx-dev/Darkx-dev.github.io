import React from "react";

export default function NavBar() {
  return (
    <div className="nav-bar text-white">
      <div className="nav-belt subpixel-antialiased flex justify-between items-center my-8 mx-28 max-lg:mx-12  max-sm:justify-center max-sm:my-5">
        <div className="font-bold text-4xl">Darkx.dev</div>
        <ul className="routes text-lg flex gap-10 max-sm:hidden">
          <li className="hover:text-[#27AE60] transition-colors cursor-pointer">About me</li>
          <li className="hover:text-[#27AE60] transition-colors cursor-pointer">Services</li>
          <li className="hover:text-[#27AE60] transition-colors cursor-pointer">Contact me</li>
        </ul>
      </div>
    </div>
  );
}
