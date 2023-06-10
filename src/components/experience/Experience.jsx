import React from "react";
import "./experience.css";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import csharp from "../../assets/c-sharp.png";
import reactnative from "../../assets/reactnative.png";
import node from "../../assets/node.png";
import postgr from "../../assets/postgresql.png";
import dotnet from "../../assets/dotnet.png";
import firebase from "../../assets/firebase.png";
import laravel from "../../assets/laravel.png";
import next from "../../assets/next.png";
import ts from "../../assets/ts.png";
import vue from "../../assets/vue.png";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="experience">
      <h5>{t('experience.title')}</h5>
      <h2>{t('experience.title2')}</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>{t('experience.category1')}</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                src={reactnative}
                className="experience_details-icon"
                alt="react-native"
              />
              <div>
                <h4>React Native</h4>
                <small className="text-light">{t('experience.level1')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={react}
                className="experience_details-icon"
                alt="react"
              />
              <div>
                <h4>React & Redux</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>

            <article className="experience_details">
              <img src={ts} className="experience_details-icon" alt="css" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>

            <article className="experience_details">
              <img src={vue} className="experience_details-icon" alt="vue" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">{t('experience.level3')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={next} className="experience_details-icon" alt="next" />
              <div>
                <h4>Next</h4>
                <small className="text-light">{t('experience.level3')}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>{t('experience.category2')}</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img
                src={csharp}
                className="experience_details-icon"
                alt="c-sharp"
              />
              <div>
                <h4>C#</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={dotnet}
                className="experience_details-icon"
                alt="dotnet"
              />
              <div>
                <h4>.Net</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>

            <article className="experience_details">
              <img
                src={postgr}
                className="experience_details-icon"
                alt="postgresql"
              />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={firebase}
                className="experience_details-icon"
                alt="firebase"
              />
              <div>
                <h4>FireBase</h4>
                <small className="text-light">{t('experience.level2')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">{t('experience.level3')}</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={laravel}
                className="experience_details-icon"
                alt="laravel"
              />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">{t('experience.level3')}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
