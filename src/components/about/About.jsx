import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
        
          <p>
          My name is GökTug Fevzi Özçelik, and I am 24 years old. I am a student at Erciyes University, studying Computer Engineering. Throughout my academic journey, I have had the opportunity to be involved in various projects in the fields of artificial intelligence, web programming, mobile programming, and game programming.
            <br />
            <br />
            Currently, I am capable of designing websites, writing backend code, and working with databases. Additionally, I develop applications for the Google Play Store.
            <br />
            <br />
            I had the chance to intern at Iotech, where I completed tasks related to .Net and React. In the upcoming months, as part of the Erasmus+ Internship program, I will be interning at Rulmenti S.A company in Romania. Following that, I will complete my mandatory internship at Turkish Aerospace Industries, Inc. and graduate from my department.
          </p>
          <a href="#project" className="btn btn-primary">
            {" "}
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
