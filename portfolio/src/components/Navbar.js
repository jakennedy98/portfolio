import React from 'react'
import "./Styles.css"

function Navbar() {
    return (
        <nav id="nav" class="navbar">
            <ul className="nav-list-left"></ul>
            <ul className="nav-list-right">
                <li><a href="#header">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a  href="#contact" >Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
