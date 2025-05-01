import React from "react";
import Link from "next/link";

interface NavHomeProps {
  activeNav: "home" | "projects" | "blog" | null;
  setActiveNav: (activeNav: "home" | "projects" | "blog" | null) => void;

  setPreActiveNav: (activeContent: "home" | "projects" | "blog" | null) => void;

  chooseAnimation: () => string | undefined;

  currentPath: string;
}

const NavHome = ({
  activeNav,
  setActiveNav,

  setPreActiveNav,

  chooseAnimation,

  currentPath,
}: NavHomeProps) => {
  const homeItems = [
    {
      label: "Introduction",
      href: "/#home-introduction",
      padding: "pt-12",
      delay: "0.1",
    },

    {
      label: "Education",
      href: "/#home-education",
      padding: "",
      delay: "0.15",
    },

    {
      label: "Projects",
      href: "/#homeprojects",
      padding: "",
      delay: "0.20",
    },

    { label: "Skills", href: "/#home-skills", padding: "pb-12", delay: "0.25" },
  ];

  const handleMouseEnter = () => {
    if (activeNav !== "home") {
      setPreActiveNav(activeNav);
      setActiveNav("home");
    }
  };

  const pathClass = currentPath === "/" ? "nav-dropDown-item-active" : "";

  return (
    <>
      <div
        className="nav-web-item"
        onMouseEnter={() => {
          handleMouseEnter();
        }}
      >
        <Link href={"/"} className={`${pathClass}`}>Home</Link>
        {activeNav === "home" && (
          <>
            <div
              className={`nav-dropDown-page 
                ${chooseAnimation()}`}
            >
              {homeItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`nav-dropDown-item ${item.padding} animate-fade-in`}
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavHome;
