import React from 'react'
import "./Styles.css"

const Contact = (props) => {

    const contact = props.contact;
    return (
        <div id="contact" ref={contact}>
            <form id="contact-form" action="mailto:jakennedy98@gmail.com">
                <div className="contact-form-title">Contact Me!</div>
                <label>Email Address</label>
                <input></input>
                <label>Message</label>
                <textarea></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact
