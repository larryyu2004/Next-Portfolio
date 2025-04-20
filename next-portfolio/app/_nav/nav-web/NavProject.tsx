import React from "react";
import Link from "next/link";

interface NavProjectsProps {
  activeNav: "home" | "projects" | "blog" | null;
  setActiveNav: (activeNav: "home" | "projects" | "blog" | null) => void;

  preActiveNav: "home" | "projects" | "blog" | null;
  setPreActiveNav: (activeContent: "home" | "projects" | "blog" | null) => void;

  dropDownState: "loading" | "changing" | "unloading" | null;

  chooseAnimation: () => string | undefined;
}

const NavProjects = ({
  activeNav,
  setActiveNav,

  preActiveNav,
  setPreActiveNav,

  dropDownState,

  chooseAnimation,
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

  return (
    <>
      <div className="nav-web-item" onMouseEnter={handleMouseEnter}>
        Projects
        {activeNav === "projects" && (
          <>
            <div
              key={dropDownState === "changing" || dropDownState === "loading" || dropDownState === "unloading" ? dropDownState : undefined} // 👈 forces re-mount when dropDownState changes
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
