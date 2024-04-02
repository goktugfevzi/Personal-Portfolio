import React from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/goktugfevziozcelik/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/goktugfevzi" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://medium.com/@goktugfevziozcelik"
        target="_blank"
        rel="noreferrer"
      >
        <FaMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
