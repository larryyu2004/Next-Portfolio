import NavWeb from "./_nav/page";
import React from "react";
import Introduction from "./_home/Introduction"
import Education from "./_home/Education"

export default function Home() {
  return (
    <main>
      <NavWeb />
      <div className={`mt-[45px]`}>
      <Education />
      <Introduction />
      </div>
    </main>
  );
}
