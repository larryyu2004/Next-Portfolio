import NavPhone from "./nav-phone/NavPhone";
import NavWeb from "./nav-web/page";

import React from "react";

const Nav = () => {
  return (
    <>
      <div className="block md:hidden">
        <NavPhone />
      </div>
      <div className="hidden md:block">
        <NavWeb />
      </div>
    </>
  );
};

export default Nav;
