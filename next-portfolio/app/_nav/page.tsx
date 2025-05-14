"use client";
import React, { useEffect, useRef, useState } from "react";
import NavHome from "./nav-web/NavHome";
import NavProject from "./nav-web/NavProject";
import NavBlog from "./nav-web/NavBlog";
import { CpuIcon } from "../HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavWeb = () => {
  const navComponents = [
    { Component: NavHome, key: "home" },
    { Component: NavProject, key: "project" },
    { Component: NavBlog, key: "blog" },
  ];
  const [activeNav, setActiveNav] = useState<
    "home" | "projects" | "blog" | null
  >(null);

  const [preActiveNav, setPreActiveNav] = useState<
    "home" | "projects" | "blog" | null
  >(null);

  const [dropDownState, setDropDownState] = useState<
    | "loading"
    | "home_to_projects"
    | "home_to_blog"
    | "projects_to_home"
    | "projects_to_blog"
    | "blog_to_home"
    | "blog_to_projects"
    | "unloading"
    | null
  >(null);

  useEffect(() => {
    if (preActiveNav === null && activeNav !== null && dropDownState === null) {
      setDropDownState("loading");
      setTimeout(() => {}, 300);
    }
  }, [preActiveNav, activeNav, dropDownState]);

  useEffect(() => {
    if (preActiveNav === "home" && activeNav === "projects") {
      setDropDownState("home_to_projects");
      setTimeout(() => {}, 600);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav === "home" && activeNav === "blog") {
      setDropDownState("home_to_blog");
      setTimeout(() => {}, 300);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav === "projects" && activeNav === "home") {
      setDropDownState("projects_to_home");
      setTimeout(() => {}, 300);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav === "projects" && activeNav === "blog") {
      setDropDownState("projects_to_blog");
      setTimeout(() => {}, 300);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav === "blog" && activeNav === "home") {
      setDropDownState("blog_to_home");
      setTimeout(() => {}, 300);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav === "blog" && activeNav === "projects") {
      setDropDownState("blog_to_projects");
      setTimeout(() => {}, 600);
    }
  }, [preActiveNav, activeNav]);

  const handleMouseLeave = () => {
    setDropDownState("unloading");
    setTimeout(() => {
      setActiveNav(null);
      setPreActiveNav(null);
      setDropDownState(null);
    }, 300);
  };

  const currentPath = usePathname();

  const chooseAnimation = () => {
    switch (dropDownState) {
      case "loading":
        return "animate-[extendHeight_0.3s_ease-in-out_forwards]";
      case "unloading":
        return "animate-[shrinkHeight_0.3s_ease-in-out_forwards]";
      case "projects_to_home":
        return "animate-[SixtoFour_0.3s_ease-in-out_forwards]";
      case "home_to_projects":
        return "animate-[FourtoSix_0.6s_ease-in-out_forwards]";
      case "home_to_blog":
        return "animate-[FourtoFour_0.3s_ease-in-out_forwards]";
      case "projects_to_blog":
        return "animate-[SixtoFour_0.3s_ease-in-out_forwards]";
      case "blog_to_home":
        return "animate-[FourtoFour_0.3s_ease-in-out_forwards]";
      case "blog_to_projects":
        return "animate-[FourtoSix_0.6s_ease-in-out_forwards]";
      default:
        return "";
    }
  };

  return (
    <>
      <nav className="nav-web" onMouseLeave={handleMouseLeave}>
        <Link href="/">
          <CpuIcon />
        </Link>
        {navComponents.map(({ Component, key }) => (
          <Component
            key={key}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            setPreActiveNav={setPreActiveNav}
            chooseAnimation={chooseAnimation}
            currentPath={currentPath}
          />
        ))}
      </nav>
    </>
  );
};

export default NavWeb;
