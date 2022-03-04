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
                <li onClick={() => scroll('#wrapper')}>About</li>
                <li onClick={() => scroll('#skills')}>Skills</li>
                <li onClick={() => scroll('#projects')}>Projects</li>
                <li onClick={() => scroll('#contact')}>Contact</li>
            </ul>

        </section>
            

    )
}

export default Footer
