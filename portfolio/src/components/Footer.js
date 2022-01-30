import React from 'react'
import "./Styles.css"

function Footer() {

    const scroll = (id) => {
        document.querySelector(id)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    
      }

    return (
        <div className="footer">
             <ul className="nav-list-right">
                 <li className = "nav-link" onClick={() => scroll('#about-me')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            </ul>
            
        </div>
    )
}

export default Footer
