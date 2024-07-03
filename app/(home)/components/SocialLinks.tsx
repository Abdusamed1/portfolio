import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
const SocialLinks = () => {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/abdusamed-abdullahi-117a8824b/",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Abdusamed1?ocid=AIDcmmli8vlwie_SEM__k_Cj0KCQjwsPCyBhD4ARIsAPaaRf2nlVdc0zX9tCREzvvzOuFT1kjfjTBOiP76-sBHReROBQaFRK4kT78aAvrDEALw_wcB_k_",
      Label: "Github",
      Icon: SiGithub,
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
