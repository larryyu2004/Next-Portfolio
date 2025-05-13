import React from "react";
import profile_picture from "@/public/profile_picture.jpg";
const Intro = () => {
  return (
    <div className="fixed top-20 left-6 w-1/5 p-6 bg-[rgb(244,244,246)] rounded-xl shadow-lg flex flex-col items-center gap-4">
      <img
        src={profile_picture.src} // Need to use .src when not using Image component
        alt="Larry's Profile Picture"
        width={150}
        height={150}
        className="rounded-full border-4 border-gray-300 shadow-md"
      />
      <div className="text-center mt-4 space-y-1 text-gray-700">
        <h1 className="text-2xl font-bold">Welcome to Larry's Blog</h1>
        <h2 className="text-base font-medium">Operating System Optimisation</h2>
        <h2 className="text-base font-medium">Full Stack Developer</h2>
        <h2 className="text-base font-medium">Memory Optimisation</h2>
        <h2 className="text-base font-medium">Algorithmic Problem-Solving</h2>
        <h3 className="text-sm font-normal text-gray-600">Adelaide University</h3>
        <h3 className="text-sm font-normal text-gray-600">jiayiyu@myyahoo.com</h3>
      </div>
    </div>
  );
};

export default Intro;
