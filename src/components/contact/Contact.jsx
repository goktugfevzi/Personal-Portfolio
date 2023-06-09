import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const handleContactOptionClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <h5 className="h5text">{t("contact.title")}</h5>
      <h2>{t("contact.title2")}</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article
            className="contact_option"
            onClick={() =>
              handleContactOptionClick("mailto:goktugfevziozcelik@gmail.com")
            }
          >
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>goktugfevziozcelik@gmail.com</h5>
            <a
              href="mailto:goktugfevziozcelik@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.content1")}
            </a>
          </article>
          <article
            className="contact_option"
            onClick={() =>
              handleContactOptionClick(
                "https://www.linkedin.com/in/goktugfevziozcelik/"
              )
            }
          >
            <FaLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>goktugfevziozcelik</h5>
            <a
              href="https://www.linkedin.com/in/goktugfevziozcelik/"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.content2")}
            </a>
          </article>
          <article
            className="contact_option"
            onClick={() =>
              handleContactOptionClick(
                "https://www.instagram.com/goktug.fevzi/"
              )
            }
          >
            <FaInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>goktug.fevzi</h5>
            <a
              href="https://www.instagram.com/goktug.fevzi/"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.content3")}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.placeholder1")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.placeholder2")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact.placeholder3")}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.content4")}
          </button>
          {isSuccess && (
            <div className={`success-message show`}>
              {t("contact.success-message")}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
