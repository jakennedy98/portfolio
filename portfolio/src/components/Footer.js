import React from 'react'
import "./Styles.css"

function Footer() {

    const scroll = (id) => {
        document.querySelector(id)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    
      }

    return (
        <section>
             <ul className="footer-links">
                <li className = "nav-link" onClick={() => scroll('#nav')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            </ul>

        </section>
            

    )
}

export default Footer
