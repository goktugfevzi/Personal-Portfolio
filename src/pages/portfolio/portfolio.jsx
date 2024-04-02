import React from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Project from "../../components/project/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import WorkExperience from "../../components/workExperience/WorkExperience";

const Portfolio = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <WorkExperience />
            <Experience />
            <Project />
            <Contact />
            <Footer />
        </>
    );
};

export default Portfolio;
