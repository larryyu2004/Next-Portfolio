import Nav from "../_nav/page";
import Intro from "./Intro";
import Blog from "./Blog";
import NavBlog from "./NavBlog";

export default function Page() {
  return (
    <main className="fixed h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-zinc-800">
      {/* Responsive Navigation */}
      <Nav />
      <div className="mt-[45px] px-2 sm:px-4 py-8">
        <div className="flex flex-col xl:flex-row">
          {/* Left: Intro (profile) */}
          <div className="w-full xl:w-1/15 xl:sticky xl:top-24"><Intro /></div>
          {/* Center: Blog */}
          <div className="w-full"><Blog /></div>
          {/* Right: NavBlog (table of contents) - only show on xl+ */}
          <div className="hidden xl:block w-1/5"><NavBlog /></div>
        </div>
      </div>
    </main>
  );
}
