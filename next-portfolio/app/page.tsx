import React from "react";
import Nav from "./_nav/page";
import prisma from "@/lib/prisma";

export default async function Home() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
  });


  const skills = {
    "Programming Languages": ["ASM", "C", "C++", "C#", "Python", "JavaScript", "TypeScript", "Swift"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    "Backend & Database": ["Node.js", "PostgreSQL", "MSSQL", "Prisma", "ASP.NET"],
    "Tools & Others": ["Figma", "CMake", "Git", "Pytest" ,"Makefile", "Docker", "Linux"]
  };

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
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">L</span>
                </div>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-orange-400 dark:via-yellow-400 dark:to-red-400 text-transparent bg-clip-text mb-6 animate-fade-in-up">
                Larry YU
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-10 font-medium animate-fade-in-up animation-delay-200">
                Year 1 Student at University of South Australia
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
                {["Frontend Developer", "Backend Developer", "Software Engineer", "Fullstack Developer", "Tech Enthusiast", "Web Developer"].map((role, index) => (
                  <span key={index} 
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-orange-500 dark:to-red-500 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Profile */}
          <section className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-400 dark:to-yellow-400 text-transparent bg-clip-text">
                  Professional Profile
                </h2>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                A Computer Science student skilled in system programming, kernel development, and high-performance computing. 
                Proficient in C++, Python, and JavaScript, with hands-on experience in OS optimisation, web development, and concurrent 
                systems. Passionate about solving complex technical challenges.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 text-transparent bg-clip-text">
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Bachelor of Information Technology
                  </h3>
                  <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-4">
                    University of South Australia | Jul 2024 – Present
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-700 dark:text-gray-300 mb-3 text-lg">Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {["Object-Oriented Programming", "Data Driven Web Technology", "Problem Solving", "Network Fundamental", "Information Technology Fundamental", "Design Thinking", "Systems Requirements and User Experience", "System Requirements Studio"].map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Overview */}
          <section className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                  {projects.length} Current Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} 
                       className="group/project p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <h3 className="font-bold text-gray-800 dark:text-white text-lg group-hover/project:text-purple-600 dark:group-hover/project:text-purple-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 text-transparent bg-clip-text">
                  Skills & Technologies
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <div key={category} className="space-y-4 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 100}ms`}}>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white border-b-2 border-orange-500 pb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span key={index} 
                              className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-700 hover:shadow-md transform hover:scale-105 transition-all duration-300 cursor-pointer">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>


    </main>
  );
}
