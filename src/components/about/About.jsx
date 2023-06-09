import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about">
      <h5>{t('about.title2')}</h5>
      <h2>{t("about.title")}</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <p>
            {t("about.content1")}
            <br />
            <br />
            {t("about.content2")}
            <br />
            <br />
            {t("about.content3")}
          </p>
          <a href="#project" className="btn btn-primary">
            {t("about.seeProjects")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
