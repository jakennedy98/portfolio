import React from 'react'
import "./Styles.css"

const Contact = (props) => {

    const contact = props.contact;
    return (
        <section id="contact" ref={contact}>
            <form id="contact-form" action="mailto:jakennedy98@gmail.com">
                <div className="contact-form-title">Contact Me!</div>
                <label>Email Address</label>
                <input placeholder="Enter your email"></input>
                <label>Message</label>
                <textarea placeholder="Write a message"></textarea>
                <button className="button">Submit</button>
                <form action="mailto:jakennedy98@gmail.com" className="email-me">or email: <button className="email-button">jakennedy98@gmail.com</button></form>
            </form>
        </section>
    )
}

export default Contact
