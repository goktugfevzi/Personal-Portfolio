import React from "react";
import { useTranslation } from "react-i18next";
import cvTr from "../../assets/cv_tr.pdf";
import cvEn from "../../assets/cv_en.pdf";

const CTA = () => {
  const { t, i18n } = useTranslation();

  const getCvUrl = () => {
    if (i18n.language === "tr") {
      return cvTr;
    } else {
      return cvEn;
    }
  };
  return (
    <div className="cta">
      <a href={getCvUrl()} download className="btn">
        {t("header.DownloadCv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("header.LetsTalk")}
      </a>
    </div>
  );
};

export default CTA;
