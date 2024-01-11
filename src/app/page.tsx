/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import About from "./pages/about/About";
import Home_Page from "./pages/home/Home";

export default function Home() {
  return (
    <main className="">
      <Home_Page/>
      <About/>
    </main>
  );
}
