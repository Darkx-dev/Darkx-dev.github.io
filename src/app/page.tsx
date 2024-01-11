/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center gap-32 " id="home">
        <div>
          <h1 className="text-5xl text-white font-bold">
            Hi, I am <br /> Oyindimalo Bakare
          </h1>
          <h4 className="text-lg text-[#828282]">Frontend Developer</h4>
          <div className="text-sm font-medium space-x-2 text-white">
            <button className="bg-[#27AE60] px-7 py-2 " type="button">
              Download CV
            </button>
            <a className="px-7 py-2 border border-white" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded-full border border-[#202020]">
          <div className=" rounded-full border-[20px] border-transparent">
            <div className=" rounded-full">
              <div className="aspect-square rounded-full overflow-hidden">
                <img
                  className=" -translate-y-2 w-[90%]"
                  alt="Logo"
                  src={"/image 3.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
