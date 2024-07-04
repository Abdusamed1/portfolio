import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiSelenium,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { DiPython } from "react-icons/di";

const Projects = () => {
  const projects = [
    {
      title: "React portfolio",
      tech: [SiNextdotjs, SiReact, SiTailwindcss],
      link: "https://abdusamedportfolio.vercel.app/",
      cover: "/project-1light.png",
      background: "bg-indigo-500",
    },
    {
      title: "Automation Script",
      tech: [DiPython, SiSelenium],
      link: "https://github.com/Abdusamed1/Automation-Script",
      cover: "/project-3.png",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects"
        className="
        flex
        flex-col
        justify-center
        items-center rotate-6"
      />
      <div className="flex justify-center items-center">
        <div className="w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project, idx) => (
              <Link href={project.link} key={idx}>
                <div
                  className={cn(
                    "p-3 rounded-md",
                    project.background,
                    "aspect-w-16 aspect-h-9"
                  )}
                >
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full h-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5">
                      <h1 className="text-2xl font-bold">{project.title}</h1>
                      <div className="flex items-center gap-5">
                        {project.tech.map((Icon, index) => (
                          <Icon className="w-8 h-8" key={index} />
                        ))}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
