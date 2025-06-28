import React from "react";
import Link from "next/link";

interface NavProjectsProps {
  activeNav: "home" | "projects" | "blog" | null;
  setActiveNav: (activeNav: "home" | "projects" | "blog" | null) => void;

  setPreActiveNav: (activeContent: "home" | "projects" | "blog" | null) => void;

  chooseAnimation: () => string | undefined;

  currentPath: string;
}

const NavProjects = ({
  activeNav,
  setActiveNav,

  setPreActiveNav,

  chooseAnimation,

  currentPath,
}: NavProjectsProps) => {
  const projects = [
    {
      label: "Operating System Engineering",
      href: "https://github.com/larryyu2004/XV-6-Lab",
      padding: "pt-12",
      delay: 0.1,
    },

    {
      label: "My Portfolio",
      href: "https://github.com/larryyu2004/my-portfolio",
      padding: "",
      delay: 0.15,
    },

    {
      label: "My Leetcode",
      href: "http://localhost:3000/blog#leetcode-22",
      padding: "",
      delay: 0.20,
    },

        {
      label: "Memory Pool",
      href: "https://github.com/larryyu2004/Memory-Pool",
      padding: "pb-12",
      delay: 0.25,
    },
  ];

  const handleMouseEnter = () => {
    if (activeNav !== "projects") {
      setPreActiveNav(activeNav);
      setActiveNav("projects");
    }
  };

  const pathClass = currentPath === "/projects" ? "nav-dropDown-item-active" : "";

  return (
    <>
        <div className="nav-web-item" onMouseEnter={handleMouseEnter}>
          <Link href={"/projects"} className={`${pathClass}`} >Projects</Link>
          {activeNav === "projects" && (
            <>
              <div
                className={`nav-dropDown-page 
                  ${chooseAnimation()}`}
              >
                {projects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.href}
                    className={`nav-dropDown-item ${project.padding} animate-fade-in `}
                    style={{ animationDelay: `${project.delay}s` }}
                  >
                    {project.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
    </>
  );
};

export default NavProjects;
