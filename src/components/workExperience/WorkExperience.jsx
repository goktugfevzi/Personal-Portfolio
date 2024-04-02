import React from "react";
import "./WorkExperience.css";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaStar } from "react-icons/fa";
import iotech from "../../assets/iotech.jpg";
import tai from "../../assets/tai.png";
import disisleri from "../../assets/disisleri.jpg";

import "react-vertical-timeline-component/style.min.css";
const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("work_experience.jobTitle1"),
      company: t("work_experience.company1"),
      location: t("work_experience.location1"),
      date: t("work_experience.date1"),
      icon: disisleri,
      description:t("work_experience.description1"),
        
    },
    {
      title: t("work_experience.jobTitle2"),
      company: t("work_experience.company2"),
      location: t("work_experience.location2"),
      date: t("work_experience.date2"),
      icon: tai,
      description:t("work_experience.description2"),
        
    },
    {
      title: t("work_experience.jobTitle3"),
      company: t("work_experience.company3"),
      location: t("work_experience.location3"),
      date: t("work_experience.date3"),
      icon: iotech,
      description:t("work_experience.description3"),
     
    },
  ];

  return (
    <section id="about" className="about">
      <h5 className="h5text">{t("work_experience.title")}</h5>
      <h2>{t("work_experience.title2")}</h2>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={experience.date}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<img className="workImg" src={experience.icon} />}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.location}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
