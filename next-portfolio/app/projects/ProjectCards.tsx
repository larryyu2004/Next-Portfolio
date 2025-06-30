import React from "react";
import Link from "next/link";

const ProjectCards = () => {
  const projects = [
    {
      name: "Operating System Engineering",
      bgImage: "/Operating-System-Engineering.jpeg",
      to: "https://github.com/larryyu2004/XV-6-Lab",
      color: "bg-gradient-to-br from-red-300 to-red-600",
    },
    {
      name: "My Portfolio",
      bgImage: "/myPortfolio.jpg",
      to: "https://github.com/larryyu2004/my-portfolio",
      color: "bg-gradient-to-br from-blue-500 to-blue-200",
    },
    {
      name: "Leetcode",
      bgImage: "/Leetcode.jpeg",
      to: "http://localhost:3000/blog#leetcode-22",
      color: "bg-gradient-to-r from-orange-600 to-orange-200",
    },
    {
      name: "Memory Pool",
      bgImage: "/riscv.jpg",
      to: "https://github.com/larryyu2004/Memory-Pool",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
  ];

  return (
    <div className="fixed h-screen w-full overflow-y-scroll">
      {projects.map((project, index) => (
        <Link href={project.to} key={index} className="block mb-5">
          <div 
            className="relative w-full h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${project.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-500"></div>
            
            {/* Background image that scales on hover */}
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-120"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* Project title - stays the same size on hover */}
            <h1 className={`relative z-10 ${project.color} text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center px-4 sm:px-8 drop-shadow-2xl transition-all duration-300`}>
              {project.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCards;