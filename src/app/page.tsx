/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import About from "./pages/about/About";
import Home_Page from "./pages/home/Home";
import Skills from "./pages/services/Services";
import ContachMe from "./pages/Contact/ContactMe";
import { useRef } from "react";
import { ReactLenis, useLenis, } from "@studio-freight/react-lenis";
export default function Home() {
  const lenisRef = useRef()
  const lenis = useLenis(({ scroll }) => {
    
   
  })
  return (
    <ReactLenis root id="main" className="scroll-smooth snap-mandatory"  ref={lenisRef}>
      <Home_Page />
      <About />
      <Skills />
      <ContachMe />
    </ReactLenis>
  );
}
