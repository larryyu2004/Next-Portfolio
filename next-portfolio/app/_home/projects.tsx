import React from "react";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const forceDynamic = "force-dynamic";
export const revalidate = 0;

const ProjectOverview = async () => {
  const projects = await prisma.projects.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      githubUrl: true,
    },
  });
  return (
    <>
      {/* Projects Overview */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
              {projects.length} Current Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`${project.githubUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/project p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-gray-800 dark:text-white text-lg group-hover/project:text-purple-600 dark:group-hover/project:text-purple-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectOverview;
