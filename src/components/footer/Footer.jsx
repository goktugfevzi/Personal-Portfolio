import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <ul className="permalinks">
        <li>
          <a href="#about">{t("footer.menu1")}</a>
        </li>
        <li>
          <a href="#experience">{t("footer.menu2")}</a>
        </li>
        <li>
          <a href="#project">{t("footer.menu3")}</a>
        </li>
     
        <li>
          <a href="#contact">{t("footer.menu4")}</a>
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
        <small>&copy; {t("footer.content1")}</small>
      </div>
    </footer>
  );
};

export default Footer;
