import React, {useState} from 'react'
import axios from "axios"
import "./Styles.css"

const Contact = (props) => {

    const [contactData, setContactData] = useState({
        email: "",
        message: "",
    })

    const onChange = e => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
      }

    const submitMessage = () => {
        axios.post("https://lsat-blog-api.herokuapp.com/api/contact/", contactData)
        .then((response) => alert("Message Sent"))
        .catch((error) => console.log(error.data))
    }

    const contact = props.contact;
    
    return (
        <section id="contact">
            <div id="contact-form">
                <div className="contact-form-title">Contact Me!</div>
                <label>Email Address</label>
                <input placeholder="Enter your email" name = "email" onChange = {e => onChange(e)}></input>
                <label>Message</label>
                <textarea placeholder="Write a message" name = "message" onChange = {e => onChange(e)}></textarea>
                <button className="button" onClick = {() => submitMessage()}>Submit</button>
            </div>
        </section>
    )
}

export default Contact
