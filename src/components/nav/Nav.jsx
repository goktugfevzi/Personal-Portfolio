import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaBook, FaProjectDiagram } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import "./Nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeSection = "#";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0) {
          activeSection = "#" + section.getAttribute("id");
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
  
    if (sectionId === "#") {
      setActiveNav(sectionId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveNav(sectionId);
      }
    }
  };
  return (
    <nav>
      <a
        href="#"
        onClick={(e) => handleClick(e, "#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={(e) => handleClick(e, "#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={(e) => handleClick(e, "#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </a>
      <a
        href="#project"
        onClick={(e) => handleClick(e, "#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <FaProjectDiagram />
      </a>
    
      <a
        href="#contact"
        onClick={(e) => handleClick(e, "#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
