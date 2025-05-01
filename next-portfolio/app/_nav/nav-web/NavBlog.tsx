import React from "react";
import Link from "next/link";

interface NavBlogProps {
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
}: NavBlogProps) => {
  const projects = [
    {
      label: "Operating System Engineering",
      href: "/projects#operating-system-engineering",
      padding: "pt-12",
      delay: 0.1,
    },

    {
      label: "Leetcode",
      href: "/projects#my-portfolio",
      padding: "",
      delay: 0.15,
    },

    {
      label: "Memory Pool",
      href: "https://github.com/larryyu2004/portfolio-website",
      padding: "",
      delay: 0.25,
    },

    {
      label: "Web",
      href: "https://github.com/larryyu2004/Web-Fundamental",
      padding: "pb-12",
      delay: 0.3,
    },
  ];

  const handleMouseEnter = () => {
    if (activeNav !== "blog") {
      setPreActiveNav(activeNav);
      setActiveNav("blog");
    
    }
  };

  const pathClass = currentPath === "/blog" ? "nav-dropDown-item-active" : "";

  return (
    <>
      <div className="nav-web-item" onMouseEnter={handleMouseEnter}>
        <Link href={"/blog"} className={`${pathClass}`}>Blog</Link>
        {activeNav == "blog" && (
          <>
            <div
              className={`nav-dropDown-page 
                ${chooseAnimation()}`}
            >
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  className={`nav-dropDown-item ${project.padding} animate-fade-in`}
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
