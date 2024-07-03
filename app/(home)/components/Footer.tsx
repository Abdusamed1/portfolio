import React from "react";
import Name from "./Name";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="m-10">
      <div className="flex justify-center items-center pt-20">
        <Name name="Abdusamed Abdullahi" />
      </div>
      <div className="flex justify-center items-center pt-5">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
