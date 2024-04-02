import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";
import trFlag from "../../assets/tr_flag.png";
import enFlag from "../../assets/en_flag.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header id="header">
      <div className="container header_container">
        <div className="language_buttons">
          <button
            className={i18n.language === "tr" ? "active" : ""}
            onClick={() => i18n.changeLanguage("tr")}
          >
            <img src={trFlag} alt="Turkish Flag" />
          </button>
          <button
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => i18n.changeLanguage("en")}
          >
            <img src={enFlag} alt="English Flag" />
          </button>
        </div>
        <h5>{t("header.hello")}</h5>
        <h1>{t('header.name')}</h1>
        <h5 className="text-light">{t('header.profession')}</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
