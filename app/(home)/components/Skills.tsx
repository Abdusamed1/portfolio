"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiC,
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUml,
} from "react-icons/si";
import { FaGithub, FaJava, FaNodeJs } from "react-icons/fa";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { DiFirebase, DiMongodb } from "react-icons/di";
import {
  RiJavascriptLine,
  RiSupabaseFill,
  RiSupabaseLine,
} from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  const skills = [
    {
      text: "C",
      Icon: SiC,
    },
    {
      text: "Java",
      Icon: FaJava,
    },
    {
      text: "UML",
      Icon: SiUml,
    },
    {
      text: "JavaScript",
      Icon: RiJavascriptLine,
    },

    {
      text: "TypeScript",
      Icon: TbBrandTypescript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Next.js",
      Icon: TbBrandNextjs,
    },
    {
      text: "Go",
      Icon: SiGo,
    },
    {
      text: "Node.js",
      Icon: FaNodeJs,
    },
    {
      text: "MongoDB",
      Icon: DiMongodb,
    },
    {
      text: "MySql",
      Icon: GrMysql,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Firebase",
      Icon: DiFirebase,
    },
    {
      text: "Supabase",
      Icon: RiSupabaseLine,
    },
    {
      text: "GraphQL",
      Icon: GrGraphQl,
    },
    {
      text: "Git",
      Icon: FaGithub,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="
        flex
        flex-col
        justify-center
        items-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
