import React, {useRef} from 'react'
import "./Styles.css"

const Navbar = ({props}) => {

  const scroll = (id) => {
    document.querySelector(id)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

    return (
        
        <nav id="nav" className="navbar">
            <ul className="nav-links">
              <button className="hamburger-menu"><img src="/hamburger-white.png" height = "30px;"></img></button>
                <li className = "nav-link" onClick={() => scroll('#wrapper')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;
