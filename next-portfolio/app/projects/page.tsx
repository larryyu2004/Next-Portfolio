import React from "react";
import ProjectCards from "./ProjectCards";
import NavWeb from "../_nav/page";

const Projects = () => {
  return (
    <>
    <main>
    <NavWeb />
      <div className="mt-[45px]">
        <ProjectCards />
      </div>
      </main>
    </>
  );
};

export default Projects;
