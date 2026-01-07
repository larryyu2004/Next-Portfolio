import React from "react";
import Image from "next/image";
import profile_picture from "@/public/profile_picture.jpg";
import { WaypointsIcon } from "./ConnectIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { GithubIcon } from "./GithubIcon";
import { CogIcon } from "./CogIcon";

const Intro = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900/80 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700/60 overflow-hidden backdrop-blur-sm">
      {/* Cover / Gradient Top */}
      <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90 relative">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      </div>

      <div className="px-6 pb-6 -mt-12 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="relative p-1 bg-white dark:bg-slate-900 rounded-full shadow-lg">
          <Image
            src={profile_picture}
            alt="Larry's Profile Picture"
            width={100}
            height={100}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Identity */}
        <div className="text-center mt-3 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Larry Yu
          </h2>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">
            Student & Developer
          </p>
          <div className="mt-3 space-y-1">
             <p className="text-sm text-gray-500 dark:text-gray-400">Adelaide University</p>
             <p className="text-sm text-gray-500 dark:text-gray-400">jiayiyu@myyahoo.com</p>
          </div>
        </div>

        <div className="w-full space-y-6">
          {/* Roles / Focus Areas */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Focus Areas</h3>
            {[
              "Operating System Optimisation",
              "Full Stack Development",
              "Memory Optimisation",
              "Algorithmic Problem-Solving"
            ].map((role) => (
              <div key={role} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                {role}
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-100 dark:bg-slate-700"></div>

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-900 dark:text-white">
              <CogIcon />
              <span className="font-semibold text-sm">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["C++", "Python", "React", "Next.js", "Prisma", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-gray-900 dark:text-white">
              <WaypointsIcon />
              <span className="font-semibold text-sm">Connect</span>
            </div>
            <div className="space-y-2">
              <a
                href="https://github.com/larryyu2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white">
                   <GithubIcon />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  GitHub
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jiayi-yu-29b19133b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="text-gray-600 dark:text-gray-400 group-hover:text-[#0077b5]">
                   <LinkedinIcon />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;