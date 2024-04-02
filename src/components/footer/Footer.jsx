import React from "react";
import "./footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import eses from "../../assets/eses.png"

const Footer = () => {
  const { t } = useTranslation();
const navigate = useNavigate();

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
      <div class="footer_socials">
  <a href="https://www.linkedin.com/in/goktugfevziozcelik/" className="footer_socials_icon">
    <FaLinkedin />
  </a>
  <a href="https://www.instagram.com/goktug.fevzi/" className="footer_socials_icon">
    <FaInstagram />
  </a>
  <a href="https://github.com/goktugfevzi" className="footer_socials_icon">
    <FaGithub />
  </a>
  <button onClick={() => navigate('/biletvarmi')} className="footer_socials_text">
    Bilet Varmı?
  </button>

</div>
      <div className="footer_copyright">
        <small>&copy; {t("footer.content1")}</small>
      </div>
  <img class="esesImg" src={eses} alt="Eses Image" />
    </footer>
  );
};

export default Footer;
