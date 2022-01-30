import React from 'react'
import "./Styles.css"

function Education() {

    const scroll = (id) => {
        document.querySelector(id)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    
      }

    return (
        <div id="about-me" className="about-me-container">
            <div className="about-me-list">
                <div>
                    Hi, I'm Jacob. I am a Full-Stack Developer with a BA in Computer Science from Boston College. I am willing to relocate anywhere in the US (or beyond).
                </div>

                <div className="questions">Got any questions?<a id="contact-me-link" onClick={() => scroll('#contact')}> Contact me.</a></div>

                <button>Download Resume</button>

            
            </div>
            
        </div>
    )
}

export default Education
