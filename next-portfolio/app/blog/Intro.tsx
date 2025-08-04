import React from "react";
import profile_picture from "@/public/profile_picture.jpg";
import { WaypointsIcon } from "./ConnectIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { GithubIcon } from "./GithubIcon";
import { CogIcon } from "./CogIcon";

const Intro = () => {
  return (
    <div className="w-full xl:w-1/5 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 bg-white/80 dark:bg-slate-900/80 xl:fixed xl:top-20 xl:left-6">
      <img
        src={profile_picture.src}
        alt="Larry's Profile Picture"
        width={120}
        height={120}
        className="rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-md"
      />
      <div className="text-center mt-4 space-y-1">
        <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to Larry&apos;s Blog
        </p>
        <div className="text-base font-medium text-gray-700 dark:text-gray-300">Operating System Optimisation</div>
        <div className="text-base font-medium text-gray-700 dark:text-gray-300">Full Stack Developer</div>
        <div className="text-base font-medium text-gray-700 dark:text-gray-300">Memory Optimisation</div>
        <div className="text-base font-medium text-gray-700 dark:text-gray-300">Algorithmic Problem-Solving</div>
        <div className="text-sm font-normal text-gray-600 dark:text-gray-400">Adelaide University</div>
        <div className="text-sm font-normal text-gray-600 dark:text-gray-400">jiayiyu@myyahoo.com</div>
      </div>

      {/* Extra profile sections */}
      <div className="mt-6 w-full space-y-4 text-sm">
        <div className="bg-white/90 p-4 rounded-lg shadow-sm dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <CogIcon />
            <div className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">Technologies</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["C++", "Python", "React", "Next.js", "Prisma", "PostgreSQL"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white/90 dark:bg-slate-800/90 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-3">
            <WaypointsIcon />
            <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">Connect</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <GithubIcon />
              <a
                href="https://github.com/larryyu2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline text-base sm:text-lg font-semibold transition-colors"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <LinkedinIcon />
              <a
                href="https://www.linkedin.com/in/jiayi-yu-29b19133b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline text-base sm:text-lg font-semibold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;