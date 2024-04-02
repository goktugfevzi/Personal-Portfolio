import React from "react";
import "./experience.css";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import csharp from "../../assets/c-sharp.png";
import reactnative from "../../assets/reactnative.png";
import redis from "../../assets/redis.png";
import dotnet from "../../assets/dotnet.png";
import docker from "../../assets/docker.png";
import redux from "../../assets/redux.png";
import ts from "../../assets/ts.png";
import rabbitmq from "../../assets/rabbitmq.webp";
import efcore from "../../assets/efcore.png";
import dapper from "../../assets/dapper.png";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="experience">
      <h5>{t("experience.title")}</h5>
      <h2>{t("experience.title2")}</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>{t("experience.category1")}</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                src={efcore}
                className="experience_details-icon"
                alt="EFCore"
              />
              <div>
                <h4 className="h4text">EF Core</h4>
                <small className="text-light">{t("experience.level1")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={dapper}
                className="experience_details-icon"
                alt="dapper"
              />
              <div>
                <h4 className="h4text">Dapper</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>

            <article className="experience_details">
              <img src={redux} className="experience_details-icon" alt="next" />
              <div>
                <h4 className="h4text">Redux</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={redis} className="experience_details-icon" alt="node" />
              <div>
                <h4 className="h4text">Redis</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={docker}
                className="experience_details-icon"
                alt="laravel"
              />
              <div>
                <h4 className="h4text">Docker</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={rabbitmq}
                className="experience_details-icon"
                alt="rabbitmq"
              />
              <div>
                <h4 className="h4text">RabbitMQ</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article>
            
            {/* <article className="experience_details">
              <img
                src={docker}
                className="experience_details-icon"
                alt="laravel"
              />
              <div>
                <h4 className="h4text">Selenium</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={rabbitmq}
                className="experience_details-icon"
                alt="rabbitmq"
              />
              <div>
                <h4 className="h4text">SiqnalR</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article> */}

            {/* <article className="experience_details">
              <img
                src={docker}
                className="experience_details-icon"
                alt="laravel"
              />
              <div>
                <h4 className="h4text">NGRX</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={rabbitmq}
                className="experience_details-icon"
                alt="rabbitmq"
              />
              <div>
                <h4 className="h4text">Azure</h4>
                <small className="text-light">{t("experience.level3")}</small>
              </div>
            </article> */}
          </div>
        </div>
        <div className="experience_frontend">
          <h3>{t("experience.category2")}</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                src={csharp}
                className="experience_details-icon"
                alt="c-sharp"
              />
              <div>
                <h4 className="h4text">C#</h4>
                <small className="text-light">{t("experience.level1")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={dotnet}
                className="experience_details-icon"
                alt="dotnet"
              />
              <div>
                <h4 className="h4text">.Net Core</h4>
                <small className="text-light">{t("experience.level1")}</small>
              </div>
            </article>

            <article className="experience_details">
              <img
                src={reactnative}
                className="experience_details-icon"
                alt="react-native"
              />
              <div>
                <h4 className="h4text">React Native</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={react}
                className="experience_details-icon"
                alt="react"
              />
              <div>
                <h4 className="h4text">React</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>

            <article className="experience_details">
              <img src={ts} className="experience_details-icon" alt="css" />
              <div>
                <h4 className="h4text">TypeScript</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4 className="h4text">JavaScript</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>

            {/* <article className="experience_details">
              <img src={ts} className="experience_details-icon" alt="css" />
              <div>
                <h4 className="h4text">PostgreSql</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4 className="h4text">MongoDb</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article> */}

            
            {/* <article className="experience_details">
              <img src={ts} className="experience_details-icon" alt="css" />
              <div>
                <h4 className="h4text">Elastic Search</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4 className="h4text">Keycloak</h4>
                <small className="text-light">{t("experience.level2")}</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
