import React, {useRef} from 'react'
import "./Styles.css"

const Navbar = ({props}) => {

  const scroll = (id) => {
    document.querySelector(id)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const options = {
    root: document.querySelector("#skills"),
    rootMargin: '0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(
    entries => { 
      entries.forEach(entry => {

        console.log('intersection');
      });
    }, 
    options);

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(navLink => {
        observer.observe(navLink);
    })

    return (
        
        <nav id="nav" className="navbar">
            <ul className="nav-links">
                <li className = "nav-link" onClick={() => scroll('#wrapper')}>About</li>
                <li className = "nav-link" onClick={() => scroll('#skills')}>Skills</li>
                <li className = "nav-link" onClick={() => scroll('#projects')}>Projects</li>
                <li className = "nav-link" onClick={() => scroll('#contact')}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;
