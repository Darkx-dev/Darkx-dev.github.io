export default function ContachMe() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-5xl text-white font-bold">Get in touch</h1>
      <form action="#" className="flex flex-col items-center w-2/3">
        <div className="grid grid-cols-2 text-sm gap-12 max-sm:gap-8 w-[80%] max-sm:w-full mx-auto font-bold text-white">
          <input
            className="outline-none bg-transparent py-4 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Name"
          />
          <input
            className="outline-none bg-transparent py-4 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Last Name"
          />
          <input
            className="outline-none bg-transparent py-4 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Email"
          />
          <input
            className="outline-none bg-transparent py-4 border-b-2 border-[#4F4F4F] placeholder:text-[#4F4F4F]"
            type="text"
            id="name"
            placeholder="Phone number"
          />
        </div>
        <textarea
          className="text-white outline-none w-[80%] max-sm:w-full my-10 bg-transparent border border-[#4F4F4F] resize-none p-4 placeholder:text-[#4F4F4F] font-bold text-sm"
          placeholder="Message"
          rows={4}
        ></textarea>
        <button className="bg-[#27AE60] px-7 py-2 text-white" type="submit">
          Submit now{" "}
        </button>
      </form>
      <div className="flex flex-col gap-4 items-center ">
        <code className="text-[#4F4F4F] mt-20">
          @ Darkx 2023 • Developed by Roshan
        </code>
        <a href="https://www.instagram.com/dark.dev.23/" target="_blank">
          <svg
            className="invert"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
