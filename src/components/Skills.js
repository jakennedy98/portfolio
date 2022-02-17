import React from 'react'
import "./Styles.css"

function Skills() {
    return (
        <div id = "skills" className="skills">
            <div id = "skills-header">Skills</div>
            <ul className="skills-grid">
                <li className="skills-wrapper">
                    <div className="skill-title">HTML5</div>             
                    <img src = "/html5-icon.png" alt="HTML5" className="skill-logo" height="60px" />
                </li>
   
                <li className="skills-wrapper">
                    <div>CSS</div>
                    <img src = "/css-icon.png" alt="CSS" className="skill-logo" width="60px"  />
                </li>

                <li className="skills-wrapper">
                    <div>Javascript</div>
                    <img src = "/javascript-icon.png" alt="Javascript" className="skill-logo" width="60px"  />
                </li>

                <li className="skills-wrapper">
                    <div>React</div>
                    <img src = "/react-icon.png" alt="Javascript" className="skill-logo" width="60px"  />
                </li>

                <li className="skills-wrapper">
                    <div>Git / Github</div>
                    <img src = "/github.png" alt="Javascript" className="skill-logo" width="56px"  />
                </li>
                
                <li className="skills-wrapper">
                    <div>RESTful APIs</div>
                    <img src = "/api.png" alt="Javascript" className="skill-logo" width="48px"  />
                </li>

                <li className="skills-wrapper">
                    <div>Python</div>
                    <img src = "/python-icon.png" alt="Javascript" className="skill-logo" width="48px"  />
                </li>

                <li className="skills-wrapper">
                    <div>Django</div>
                    <img src = "/django-icon.png" alt="Javascript" className="skill-logo" width="48px"  />
                </li>

                <li className="skills-wrapper">
                    <div>SQL</div>
                    <img src = "/sql-server.png" alt="Javascript" className="skill-logo" width="50px"  />
                </li>

                <li className="skills-wrapper">
                    <div>R</div>
                    <img src = "/R-icon.png" alt="Javascript" className="skill-logo" width="48px"  />
                </li>

               

            </ul>

 

        

        </div>
    
    )
}

export default Skills
