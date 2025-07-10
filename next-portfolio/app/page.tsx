import React from "react";
import Nav from "./_nav/page";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("./_home/profile"));
const Education = dynamic(() => import("./_home/education"));
const Project = dynamic(() => import("./_home/projects"));
const Skills = dynamic(() => import("./_home/skills"));

export default async function Home() {
  return (
    <main className="fixed h-screen w-full overflow-y-scroll min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <Nav />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mt-[45px] px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="inline-block p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 animate-pulse">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    L
                  </span>
                </div>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-orange-400 dark:via-yellow-400 dark:to-red-400 text-transparent bg-clip-text mb-6 animate-fade-in-up">
                Larry YU
              </h1>

              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-10 font-medium animate-fade-in-up animation-delay-200">
                Year 1 Student at University of South Australia
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
                {[
                  "Frontend Developer",
                  "Backend Developer",
                  "Software Engineer",
                  "Fullstack Developer",
                  "Tech Enthusiast",
                  "Web Developer",
                ].map((role, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-orange-500 dark:to-red-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <Profile />
          <Education />
          <Project />
          <Skills />
        </div>
      </div>
    </main>
  );
}
