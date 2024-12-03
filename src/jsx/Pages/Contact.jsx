import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from 'react-router-dom';

import "../../styles/css/contact.css";

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('Nachname');
    const [firstName, setFirstName] = useState('Vorname');
    const [email, setEmail] = useState('E-Mail');
    const [subject, setSubject] = useState('Betreff');
    const [message, setMessage] = useState('Nachricht');
    const [agree, setAgree] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.classList.add("slide-in-contact-title");
        form.current.classList.add("slide-in-contact-formcontainer");
    }, []);

    const checkSubmittable = () => {
        const isValid = name.trim().length !== 0 && firstName.trim().length !== 0 && email.trim().length !== 0 && subject.trim().length !== 0 && message.trim().length !== 0 && agree;
        
        if (isValid) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    useEffect(() => checkSubmittable());

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'tbPyORwhWq1-rZClg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <div className="contact">
            <h1 className="contact--title" ref={titleRef}>Kontakt</h1>
            <form className="contact--formcontainer" ref={form} onSubmit={sendEmail}>
                <input className="contact--formcontainer--name" type="text" name="name" placeholder="Nachname" onChange={(e) => setName(e.target.value)} />
                <input className="contact--formcontainer--firstname" type="text" name="firstname" placeholder="Vorname" onChange={(e) => setFirstName(e.target.value)} />
                <input className="contact--formcontainer--mail" type="email" name="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
                <input className="contact--formcontainer--subject" type="text" name="subject" placeholder="Betreff" onChange={(e) => setSubject(e.target.value)} />
                <textarea className="contact--formcontainer--message" name="message" placeholder="Nachricht" onChange={(e) => setMessage(e.target.value)} />
                <div className="contact--formcontainer--datawrapper">
                    <input className="contact--formcontainer--datawrapper--checkbox" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}></input>
                    <div className="contact--formcontainer--datawrapper--text">Ich habe die <NavLink className="contact--formcontainer--datawrapper--text--button" to="/data">Datenschutzhinweise</NavLink> gelesen und akzeptiert.</div>
                </div>
                <input className={`contact--formcontainer--button ${isDisabled ? 'disabled' : ''}`} disabled={isDisabled} type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;