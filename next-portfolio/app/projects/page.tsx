import React from "react";
import ProjectCards from "./ProjectCards";
import NavWeb from "../_nav/page";
import NavPhone from "../_nav/nav-phone/NavPhone";

const Projects = () => {
  return (
    <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Responsive Navigation */}
      <div className="block md:hidden"><NavPhone /></div>
      <div className="hidden md:block"><NavWeb /></div>
      <div className="mt-[60px] px-2 sm:px-4 py-8">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
