import React from "react";
import { useState } from "react";
import {BsGithub} from "react-icons/bs"
import "./project.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Prime Video Clone with React Native EXPO",
    github: "https://github.com/goktugfevzi/Prime_Video_Clone_Expo",
    category: "Mobile Application",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personnel Tracking Application",
    github: "https://github.com/goktugfevzi/EmployerWebsite",
    category: "Full-Stack Website",
  },
  {
    id: 3,
    image: IMG3,
    title: "Flag Game Website",
    github: "https://github.com/goktugfevzi/FlagGame",
    category: "Frontend",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sports Match App",
    github: "https://github.com/goktugfevzi/SportsMatch",
    category: "Mobile Application",
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
    title: "Allah Tuttugunu Altin Etsin Funny App",
    github: "https://github.com/goktugfevzi/Allah-Tuttugunu-Altin-Etsin",
    category: "Mobile Application",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <section id="project" className="project" >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo, category }) => {
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
