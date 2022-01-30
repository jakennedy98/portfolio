import React, {useRef} from 'react'
import "./Styles.css"

const Navbar = ({props}) => {

  const scroll = (id) => {
    document.querySelector(id)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });

  }



    return (
        <div>
        
        <nav id="nav" className="navbar">
      
            <ul className="nav-list-left"></ul>
            <ul className="nav-list-right">
                <li className = "nav-link" onClick={() => scroll('#about-me')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            
            </ul>
           
        </nav>

   

        </div>
    )
}

export default Navbar;
