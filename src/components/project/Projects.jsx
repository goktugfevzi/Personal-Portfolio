import React from "react";
import { useState } from "react";
import {BsGithub} from "react-icons/bs"
import "./project.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/whatswebsite.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/tcdd.png";
import { useTranslation } from "react-i18next";


const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Prime Video Clone",
    github: "https://github.com/goktugfevzi/Prime_Video_Clone_Expo",
    category: "Mobile Application",
  },
  {
    id: 2,
    image: IMG2,
    title: "WhatsWebsite",
    github: "https://github.com/goktugfevzi/WhatsWebsite",
    category: "Full Stack",
  },
  {
    id: 3,
    image: IMG3,
    title: "EnterScoreX",
    github: "https://github.com/goktugfevzi/EnterScoreX",
    category: "Full Stack",
  },
  {
    id: 4,
    image: IMG4,
    title: "Bank App",
    github: "https://github.com/goktugfevzi/BankAPI",
    category: "Full Stack",
  },
  {
    id: 5,
    image: IMG5,
    title: "TCP Server-Client App",
    github: "https://github.com/goktugfevzi/WPF-Server-Client",
    category: "Backend",
  },
  {
    id: 6,
    image: IMG6,
    title: "Bilet Varmı(Tcdd Bilet Botu)",
    github: "https://github.com/goktugfevzi/BiletVarmi",
    category: "Backend",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { t } = useTranslation();

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <section id="project" className="project" >
      <h5>{t('portfolio.title')}</h5>
      <h2>{t('portfolio.title2')}</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, category }) => {
          const isHovered = hoveredProject === id;

          return (
            <article
            key={id}
            className={`project_item ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredProject(id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(github)}
          >
            <div className="project_item-image">
              <img src={image} alt={title} />
              {isHovered && (
                <div className="project_item-overlay">
                  <div className="project_item-category">{category}</div>
                  <div className="project_item-icon">
                    <BsGithub size={50}/>
                  </div>
                </div>
              )}
            </div>
            <div className="project_item-details">
              <h3 className="project_item-title">{title}</h3>
              <div className="project_item-cta">
                <i className="fa fa-github" />
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
