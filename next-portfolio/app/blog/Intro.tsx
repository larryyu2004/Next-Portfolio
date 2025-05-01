import React from "react";
import profile_picture from "@/public/profile_picture.jpg";
const Intro = () => {
  return (
    <div className="fixed w-1/6 flex flex-col gap-2 mt-20 items-center">
      <img
        src={profile_picture.src} // Need to use .src when not using Image component
        alt="Larry's Profile Picture"
        width={150}
        height={150}
        className="rounded-4xl"
      />
      <div className="left-0">
        <h1 className="font-bold text-xl">Welcome to Larry's Blog</h1>
        <h2 className="font-semibold">Operating System Optimisation</h2>
        <h2 className="font-semibold">Full Stack Developer</h2>
        <h2 className="font-semibold">Memory Optimisation</h2>
        <h2 className="font-semibold">Algorithmic Problem-Solving</h2>
        <h3 className="font-medium">Adelaide University</h3>
        <h3 className="font-medium">jiayiyu@myyahoo.com</h3>
      </div>
    </div>
  );
};

export default Intro;
