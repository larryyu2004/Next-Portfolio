"use client";
import React from "react";
import NavHome from "./nav-web/NavHome";
import NavProject from "./nav-web/NavProject";
import NavContact from "./nav-web/NavContact";
import NavBlog from "./nav-web/NavBlog";
import { CpuIcon } from "./HomeIcon"

const NavWeb = () => {
  return (
    <>
      <nav className="nav-web">
        <CpuIcon />
        <NavHome />
        <NavProject />
        <NavContact />
        <NavBlog />
      </nav>
    </>
  );
};

export default NavWeb;
