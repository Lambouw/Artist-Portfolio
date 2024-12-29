import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import emailjs from "emailjs-com";

import "../../styles/css/contact.css";

const Contact = () => {
  const form = useRef(null);

  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("E-Mail");
  const [message, setMessage] = useState("Nachricht");

  const [agree, setAgree] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.classList.add("slide-in-contact-title");
    form.current.classList.add("slide-in-contact-formcontainer");
  }, []);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name !== null &&
      name.length > 0 &&
      email !== null &&
      email.length > 0 &&
      email.match(emailPattern) &&
      message !== null &&
      message.length > 0 &&
      agree === true
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, message, agree]);

  const sendEmail = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        {
          name: name,
          email: email,
          message: message,
        }, // Dynamic data from the form
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="contact">
      <h1 className="contact--title" ref={titleRef}>
        Kontakt
      </h1>
      <form className="contact--formcontainer" ref={form} onSubmit={sendEmail}>
        <input
          className="contact--formcontainer--name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contact--formcontainer--mail"
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="contact--formcontainer--message"
          name="message"
          placeholder="Nachricht"
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="contact--formcontainer--datawrapper">
          <input
            className="contact--formcontainer--datawrapper--checkbox"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          ></input>
          <div className="contact--formcontainer--datawrapper--text">
            Ich habe die{" "}
            <NavLink
              className="contact--formcontainer--datawrapper--text--button"
              to="/data"
            >
              Datenschutzhinweise
            </NavLink>{" "}
            gelesen und akzeptiert.
          </div>
        </div>
        <input
          className={`contact--formcontainer--button ${
            isDisabled ? "disabled" : ""
          }`}
          disabled={isDisabled}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Contact;
