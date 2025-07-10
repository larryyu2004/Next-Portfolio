import React from "react";
import prisma from "@/lib/prisma";

export const forceDynamic = "force-dynamic";
export const revalidate = 0;

const Skills = async () => {
  const Technologies = await prisma.technology.findMany({
    select: {
      name: true,
      category: true,
    },
  });

  const skills: { [key: string]: string[] } = {};
  Technologies.forEach(({ name, category }) => {
    const key = category || "Others"; // Default to "Others" if no category is provided
    if (!skills[key]) {
      skills[key] = [];
    }
    skills[key].push(name);
  });
  return (
    <>
      {/* Skills */}
      <section className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 text-transparent bg-clip-text">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => (
                <div
                  key={category}
                  className="space-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white border-b-2 border-orange-500 pb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((name, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700 hover:shadow-md transform hover:scale-105 transition-all duration-300 cursor-pointer">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
