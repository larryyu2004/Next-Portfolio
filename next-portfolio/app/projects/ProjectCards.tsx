import React from "react";
import Link from "next/link";

import OS from "@/public/Operating-System-Engineering.jpeg";
import NextPortfolio from "@/public/myPortfolio.jpg";
import MemoryPool from "@/public/riscv.jpg";
import Leetcode from "@/public/Leetcode.jpeg"

const ProjectCards = () => {
  const projects = [
    {
      name: "Operating System Engineering",
      bgImage: OS,
      to: "https://github.com/larryyu2004/my-portfolio",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-200",
      delay: 0.3,
    },

    {
      name: "My Portfolio",
      bgImage: NextPortfolio,
      to: "https://github.com/larryyu2004/my-portfolio",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-200",
      delay: 0.6,
    },

    {
      name: "Memory Pool",
      bgImage: MemoryPool,
      to: "https://github.com/larryyu2004/my-portfolio",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-200",
      delay: 0.9,
    },

    {
      name: "Leetcode",
      bgImage: Leetcode,
      to: "/projects/leetcode",
      color: "bg-gradient-to-r from-orange-200 to-orange-600",
      delay: 1.2,
    },
  ];

  
  return (
    <>
      <div>
        {projects.map((project, index) => (
            
          <Link href={project.to} key={index} className={`block w-full h-full`}>
            <div
              className={`relative max-w-[100vw] min-h-[80vh] flex justify-center items-center cursor-pointer overflow-hidden mb-[5px] opacity-1`}
              style={{ animationDelay: `${project.delay}s` }}
            >
              <div
                className="absolute w-full h-full bg-cover bg-center overflow-hidden transition-transform duration-300 hover:scale-110"
            
              ></div>

              <h1
                className={`relative ${[project.color]}
                text-transparent bg-clip-text text-5xl font-bold z-10`}
              >
                {project.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectCards;
