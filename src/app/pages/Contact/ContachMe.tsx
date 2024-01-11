import React from "react";

export default function ContachMe() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-5xl text-white font-bold">Get in touch</h1>
      <form action="#" className="flex flex-col items-center w-2/3">
        <div className="grid grid-cols-2 text-sm gap-12 w-[80%] mx-auto font-bold text-white">
          <input
            className="outline-none bg-transparent py-5 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Name"
          />
          <input
            className="outline-none bg-transparent py-5 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Last Name"
          />
          <input
            className="outline-none bg-transparent py-5 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Email"
          />
          <input
            className="outline-none bg-transparent py-5 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Phone number"
          />
        </div>
        <textarea className="outline-none w-[80%] my-10 bg-transparent border border-[#4F4F4F] resize-none p-4" placeholder="Message" rows={4}></textarea>
        <button className="bg-[#27AE60] px-7 py-2 text-white" type="submit">Submit now </button>
      </form>
    </div>
  );
}
