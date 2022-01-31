import React from 'react'
import "./Styles.css"

const Contact = (props) => {

    const contact = props.contact;
    return (
        <section id="contact" ref={contact}>
            <form id="contact-form" action="mailto:jakennedy98@gmail.com">
                <div className="contact-form-title">Contact Me!</div>
                <label>Your Email Address</label>
                <input></input>
                <label>Message</label>
                <textarea></textarea>
                <button className="button">Submit</button>
                <form action="mailto:jakennedy98@gmail.com" className="email-me">or email: <button className="email-button">jakennedy98@gmail.com</button></form>
            </form>
        </section>
    )
}

export default Contact
