import React, {useState} from 'react'
import "./Styles.css"

const Navbar = ({props}) => {

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  } 

  const scroll = (id, toggle) => {
    document.querySelector(id)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
    if(toggle) setShowNav(!showNav);
  }

  const mobileNav = () => {
    return (
      showNav && 
      <ul className = "mobile-nav">
        <li className = "mobile-nav__links" onClick={() => scroll('#wrapper', true)}>About</li>
        <li className = "mobile-nav__links" onClick={() => scroll('#skills', true)}>Skills</li>
        <li className = "mobile-nav__links" onClick={() => scroll('#projects', true)}>Projects</li>
        <li className = "mobile-nav__links" onClick={() => scroll('#contact', true)}>Contact</li>



      </ul>
    )
  }

    return (


      <div>
        <nav id="nav" className="navbar">
           
            <ul className="nav-links">
         
              <button onClick = {() => toggleNav()} className="hamburger-menu"><img src="/hamburger-white.png" height = "30px;"></img></button>
                <li className = "nav-link" onClick={() => scroll('#wrapper')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            </ul>
        </nav>
        {mobileNav()}
      </div>
    )
}

export default Navbar;
