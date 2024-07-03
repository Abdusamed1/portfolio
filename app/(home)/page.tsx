import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import NavbarDemo from "./components/NavbarDemo";

const page = () => {
  return (
    <div className="min-h-screen overflow-hidden ">
      {/* <NavbarDemo /> */}
      <div className=" relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        {/* <div className="h-10 xl:h-32 bg-gradient-to-t from-black  -bottom-5 left-0 xl:bottom-0 w-full"></div> */}
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
