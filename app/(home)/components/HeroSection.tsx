import Link from "next/link";
import React from "react";
import Title from "./Title";

const HeroSection = () => {
  return (
    <div className=" min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row justify-between items-center">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!
          <span className="underline underline-offset-8 decoration-green-500">
            <br /> I&apos;m Abdusamed.{" "}
          </span>{" "}
        </h1>

        <p className="md:w-96 text-lg text-black ">
          A FullStack developer passionate about building software and modern
          web applications
        </p>

        <Link href={"mailto:some@gmail.com"} className="inline-block">
          <Title text="Contact me" />
        </Link>
      </div>

      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative z-10">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="glow absolute top-[50%] right-1/2  "></div>
      </div>
    </div>
  );
};

export default HeroSection;
