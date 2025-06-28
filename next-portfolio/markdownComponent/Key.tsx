import React from "react";

import { KeyCircleIcon } from "./Icon/KeyIcon"

function Key({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start border-l-4 border-b-4 border-red-600  bg-red-50 my-4 pb-2 rounded-md dark:border-red-800 dark:bg-red-950 ">
      <div className="text-red-600 dark:text-white">
        <KeyCircleIcon />
      </div>
      <div>
        <p className="pt-2 font-semibold text-red-600 dark:text-white">Key</p>
        <div className="indent-8 font-bold dark:text-white ">{children}</div>
      </div>
    </div>
  );
}

export default Key;
