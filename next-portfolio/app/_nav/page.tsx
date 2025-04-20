"use client";
import React, { useEffect, useState } from "react";
import NavHome from "./nav-web/NavHome";
import NavProject from "./nav-web/NavProject";
import NavBlog from "./nav-web/NavBlog";
import { CpuIcon } from "./HomeIcon";

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
    "loading" | "changing" | "unloading" | null
  >(null);

  console.log("activeNav", activeNav);
  console.log("preActiveNav", preActiveNav);
  console.log("dropDownState", dropDownState);

  useEffect(() => {
    if (preActiveNav === null && activeNav !== null) {
      console.log("start dropdown-------------------------------------");
      setDropDownState("loading");
      setTimeout(() => {
        setDropDownState(null);
      }, 300);
    }
  }, [preActiveNav, activeNav]);

  useEffect(() => {
    if (preActiveNav !== null && preActiveNav !== activeNav) {
      setDropDownState("changing");
      setTimeout(() => {
        setDropDownState(null);
      }, 300);
    }
  }, [preActiveNav, activeNav]);

  const handleMouseLeave = () => {
    console.log("finish dropdown-------------------------------------");
    setDropDownState("unloading");
    setTimeout(() => {
      setActiveNav(null);
      setPreActiveNav(null);
      setDropDownState(null);
    }, 300);
  };

  const chooseAnimation = () => {
    if (dropDownState == "unloading") {
      return "animate-[shrinkHeight_0.3s_ease-in-out_forwards]";
    } else if (dropDownState == "changing") {
      return "animate-[extendHalfHeight_0.6s_ease-in-out_forwards]";
    } else if (dropDownState == "loading" || dropDownState == "pending") {
      return "animate-[extendHeight_0.3s_ease-in-out_forwards]";
    }
  };

  return (
    <>
      <nav className={`nav-web`} onMouseLeave={handleMouseLeave}>
        <CpuIcon />
        {navComponents.map(({ Component, key }) => (
          <Component
            key={key}
            activeNav={activeNav}
            setActiveNav={setActiveNav}
            preActiveNav={preActiveNav}
            setPreActiveNav={setPreActiveNav}
            dropDownState={dropDownState}
            chooseAnimation={chooseAnimation}
          />
        ))}
      </nav>
    </>
  );
};

export default NavWeb;
