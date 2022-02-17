import React, {useState, useEffect} from 'react'
import "./Styles.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Education() {

    const scroll = (id) => {
        document.querySelector(id)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    }

    const [offset, setOffset] = useState(0)

    useEffect(() => {
      function handleScroll() {
        setOffset(window.pageYOffset)
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

    return (
        <div id="wrapper" className="wrapper" >
             <LazyLoadImage
     

                    src={"/sky.jpg"}
                    effect="blur"
                    alt="sky"
                    className="parallax"
                    style={{
                        transform: `translateY(${offset * 0.9}px)`, 
                    }}
    
                
            />

            
            <section 
                className = "header-container" 
                style={{  }}
            >
                
                <div >
                   
                     
                    <div id = "header" className="header">
                        <img src = "/face.jpeg" alt="Logo" className="profile-image" />
                        <h1 className="header-component">Jacob Kennedy</h1>
                        <h2 className="header-component">Full-Stack Developer</h2>
                    </div>
                
                    <div className="about-me-text">
                        <p>
                            Hi, I'm Jacob. I am a Full-Stack Developer with a BA in Computer Science 
                            from Boston College. I am willing to relocate anywhere in the US (or beyond).
                        </p>

                        <div className="questions">Got any questions?<a id="contact-me-link" onClick={() => scroll('#contact')}> Contact me.</a></div>
                        <button className="resume-button"><a href={require("../Resume.PDF")} download="Resume_Jacob_Kennedy">Download Resume</a></button>
                    
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Education
