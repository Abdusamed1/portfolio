import React from "react";

import Name from "./Name";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className=" py-10 flex justify-between items-center">
      <Name name="Abdusamed Abdullahi" />
      <SocialLinks />
    </nav>
  );
};

export default Navbar;
