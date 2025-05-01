import React from "react";
import { RouteIcon } from "./Icon/RouteIcon"
import { KeyCircleIcon } from "./Icon/KeyIcon"

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start border-l-4 border-green-600 my-4 rounded bg-green-50">
      <div className="text-green-600">

        <RouteIcon />
      </div>
      <div>
        <p className="pt-2 font-semibold text-green-700">Tip</p>
        <div className="text-gray-800 indent-8">{children}</div>
      </div>
    </div>
  );
}

export default Tip;
