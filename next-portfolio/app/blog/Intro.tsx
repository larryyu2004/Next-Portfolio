import React from "react";
import profile_picture from "@/public/profile_picture.jpg";
import { WaypointsIcon } from "./ConnectIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { GithubIcon } from "./GithubIcon";
import { CogIcon } from "./CogIcon";
const Intro = () => {
  return (
    <div className="fixed top-20 left-6 w-1/5 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 ">
      <img
        src={profile_picture.src} // Need to use .src when not using Image component
        alt="Larry's Profile Picture"
        width={150}
        height={150}
        className="rounded-full border-4 border-gray-300 shadow-md"
      />
      <div className="text-center mt-4 space-y-1 ">
        <p className="text-2xl font-bold">Welcome to Larry&apos;s Blog</p>
        <div className="text-base font-medium">
          Operating System Optimisation
        </div>
        <div className="text-base font-medium">Full Stack Developer</div>
        <div className="text-base font-medium">Memory Optimisation</div>
        <div className="text-base font-medium">Algorithmic Problem-Solving</div>
        <div className="text-sm font-normal">
          Adelaide University
        </div>
        <div className="text-sm font-normal">
          jiayiyu@myyahoo.com
        </div>
      </div>
      {/* Extra profile sections */}
      <div className="mt-6 w-full space-y-4 text-sm ">
        <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800 dark:text-white">
          <div className="flex gap-4">
            <CogIcon />
            <div className="font-semibold mb-2 text-xl">Technologies</div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {["C++", "Python", "React", "Next.js", "Prisma", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 px-2 py-1 rounded text-xs font-medium dark:bg-gray-800 dark:text-white"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-sm">
          <div className="flex gap-4">
            <WaypointsIcon />
            <div className="font-bold mb-2 text-xl">Connect</div>
          </div>
          <div className="flex gap-4 text-sm text-black-600 mt-2">
            <GithubIcon />
            <a
              href="https://github.com/larryyu2004"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lg font-semibold"
            >
              GitHub
            </a>
            <LinkedinIcon />
            <a
              href="https://www.linkedin.com/in/jiayi-yu-29b19133b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-lg font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
