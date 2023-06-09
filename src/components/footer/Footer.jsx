import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/goktugfevziozcelik/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/goktug.fevzi/">
          <FaInstagram />
        </a>
        <a href="https://github.com/goktugfevzi">
          <FaGithub />
        </a>
     
      </div>
      <div className="footer_copyright">
        <small>&copy; Goktug Fevzi Ozcelik Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
