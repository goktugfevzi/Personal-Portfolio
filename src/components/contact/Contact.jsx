import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4g68gr",
        "template_roca515",
        form.current,
        "TN_EsbT_N4HUcDcTg"
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

    // Başarılı mesajını 3 saniye sonra gizlemek için
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const handleContactOptionClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <h5 className="h5">Get in Touch</h5>
      <h2>Contact Me</h2>
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
              Send a message
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
              Send connection request
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
              Send follow request
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {isSuccess && (
          <div className={`success-message ${isSuccess ? "show" : ""}`}>
            Your message has been sent successfully.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
