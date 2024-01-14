/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Home_Page() {
  return (
    <div className="flex max-sm:flex-col-reverse items-center justify-around max-sm:justify-center max-sm:gap-24 px-10 max-sm:px-2 mb-12 h-[80vh]" id="home">
        <div className="space-y-6 max-sm:space-y-3">
          <h1 className="text-5xl max-sm:text-4xl text-white font-bold">
            Hi, I am <br /> Roshan Kumar
          </h1>
          <h4 className="text-lg text-[#828282]">Frontend Developer</h4>
          <div className="text-sm font-medium space-x-2 flex text-nowrap text-white pt-3">
            <button className="bg-[#27AE60] px-7 py-2 " type="button">
              Download CV
            </button>
            <a className="px-7 py-2 border border-white" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded-full border border-[#202020] max-sm:scale-90">
          <div className=" rounded-full border-[20px] border-transparent">
            <div className=" rounded-full">
              <div className="aspect-square rounded-full overflow-hidden">
                <img
                  className="w-[95%]"
                  alt="Logo"
                  src={"/image 3.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
