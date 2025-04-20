import React from "react";
import Link from "next/link";

interface NavHomeProps {
  activeNav: "home" | "projects" | "blog" | null;
  setActiveNav: (activeNav: "home" | "projects" | "blog" | null) => void;

  preActiveNav: "home" | "projects" | "blog" | null;
  setPreActiveNav: (activeContent: "home" | "projects" | "blog" | null) => void;

  dropDownState: "loading" | "changing" | "unloading" | null;

  chooseAnimation: () => string | undefined;
}

const NavHome = ({
  activeNav,
  setActiveNav,

  preActiveNav,
  setPreActiveNav,

  dropDownState,

  chooseAnimation,
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

  return (
    <>
      <div
        className="nav-web-item"
        onMouseEnter={() => {
          handleMouseEnter();
        }}
      >
        Home
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
