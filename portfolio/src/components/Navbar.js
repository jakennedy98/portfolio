import React from 'react'
import "./Styles.css"

function Navbar() {
    return (
        <nav class="navbar">
            <ul className="nav-list-left"></ul>
            <ul className="nav-list-right">
                <li><a>About Me</a></li>
                <li><a>Skills</a></li>
                <li><a>Projects</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
