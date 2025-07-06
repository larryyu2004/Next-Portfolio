import React from "react";
import ProjectCards from "./ProjectCards";
import Nav from "../_nav/page";

const Projects = () => {
  return (
    <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Responsive Navigation */}
      <Nav />
      <div className="mt-[60px] px-2 sm:px-4 py-8">
        <div className="space-y-12">
          {/* Static Project Cards */}
          <ProjectCards />
        </div>
      </div>
    </main>
  );
};

export default Projects;
