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
      href: "/projects#operating-system-engineering",
      padding: "pt-12",
      delay: 0.1,
    },

    {
      label: "My Portfolio",
      href: "/projects#my-portfolio",
      padding: "",
      delay: 0.15,
    },

    {
      label: "Portfolio",
      href: "https://github.com/larryyu2004/portfolio-website",
      padding: "",
      delay: 0.25,
    },

    {
      label: "Web Fundamental",
      href: "https://github.com/larryyu2004/Web-Fundamental",
      padding: "",
      delay: 0.3,
    },

    {
      label: "React Fundamental",
      href: "https://github.com/larryyu2004/react-fundamental",
      padding: "",
      delay: 0.35,
    },

    {
      label: "My Leetcode",
      href: "/projects/leetcode",
      padding: "pb-12",
      delay: 0.4,
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
