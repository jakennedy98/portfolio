import React from 'react'
import "./Styles.css"


function Intro() {
    return (
        <section>
            <div id = "header"className="header" >
                <img src = "/face.jpeg" alt="Logo" className="profile-image" />
                <h1 className="header-component">Jacob Kennedy</h1>
                <h2 className="header-component">Full-Stack Developer</h2>
            </div>
        </section>
    )
}

export default Intro;
