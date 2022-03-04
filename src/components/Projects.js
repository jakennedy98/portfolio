import React, {useState} from 'react'


const Projects = () => {

    const [showProject, setShowProject] = useState(false);
    const [project, setProject] = useState('')

    const projectInfo = (project) => {
        switch (project) {
            case 'blog':  
                return (
                    <div onClick = {() => toggleProject()} className = "project-info__container" className =  {showProject ? "project-info__container" : "hidden"} >
                   
                        <div className = "project-info" className = {showProject ? "project-info" : "hidden"} >
                            <div className = "project-info__wrapper">
                                <img className = "X" src={"X.png"} width = "24px"></img>
                                <h1 className = "project-info__title">The LSAT Report Blog</h1>

                                <div className = "project-info__description">
                                    <div>
                                        <img className = "project-info__image" src={"blog.jpg"} width = "100%"></img>
                                    </div>
                                    <div>
                                    <p>This project is a fully functional LSAT blog, complete with an about me page and a contact page. Users can search for blog posts by keywords. </p>
                                    <p>Skills used:
                                        <ul>
                                            <li className = "project-info__skill">Django (Django REST Framework)<img src = "/django-icon.png" alt="Javascript" className="skill-logo" width="30px"  /></li>
                                            <li className = "project-info__skill">PostgreSQL<img src = "/postgres-icon.png" alt="React" className="skill-logo" width="30px"  /></li>   
                                            <li className = "project-info__skill">React<img src = "/react-icon.png" alt="React" className="skill-logo" width="30px"  /></li>
                                            <li  className = "project-info__skill">AWS<img src = "/aws-icon.png" alt="React" className="skill-logo" width="30px"  /></li>                           
                                        </ul>
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <div className = "project-info__links">
                                        <a href = "https://lsat-blog-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Live</a>
                                        <a href = "https://github.com/jakennedy98/lsat-blog" target="_blank" rel="noopener noreferrer">View Code</a>
                                    </div>
                                    </div>
                            </div>
                            <div className = "project__description"></div>
                        </div>
                    </div>
                    )
            case 'homework':  
                return (
                    <div onClick = {() => toggleProject()} className = "project-info__container" className = {showProject ? "project-info__container" : "hidden"} >
                        <div className = "project-info" className = {showProject ? "project-info" : "hidden"} >
                            <div className = "project-info__wrapper">
                                <img className = "X" src={"X.png"} width = "24px"></img>
                                <h1 className = "project-info__title">Homework Interface</h1>

                                <div className = "project-info__description">
                                    <div>
                                        <img className = "project-info__image" src={"homework.jpg"} width = "100%"></img>
                                    </div>
                                    <div>
                                    <p>For my LSAT instructor position, I wanted a way to create assingments for my students.</p>
                                    <p>This application allows me to create articles, videos, flashcard sets, and quizzes, and assign them to specific students.
                                        The quiz data is stored and analytics are given based on the user's performance. 
                                    </p>
                                    <p>Skills used:
                                        <ul>
                                            <li className = "project-info__skill">Django (Django REST Framework)<img src = "/django-icon.png" alt="Javascript" className="skill-logo" width="30px"  /></li>
                                            <li className = "project-info__skill">PostgreSQL<img src = "/postgres-icon.png" alt="React" className="skill-logo" width="30px"  /></li>   
                                            <li className = "project-info__skill">React<img src = "/react-icon.png" alt="React" className="skill-logo" width="30px"  /></li>
                                            <li  className = "project-info__skill">AWS<img src = "/aws-icon.png" alt="React" className="skill-logo" width="30px"  /></li>                           
                                        </ul>
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <div className = "project-info__links">
                                        <a>View Live</a>
                                        <a a href = "https://github.com/jakennedy98/homework-interface" target="_blank" rel="noopener noreferrer">View Code</a>
                                    </div>
                                    </div>
                            </div>
                            <div className = "project__description"></div>
                        </div>
                    </div>
                )
                case 'new york':  
                return (
                    <div onClick = {() => toggleProject()} className = "project-info__container" className = {showProject ? "project-info__container" : "hidden"} >
                        <div className = "project-info" className = {showProject ? "project-info" : "hidden"} >
                            <div className = "project-info__wrapper">
                                <img className = "X" src={"X.png"} width = "24px"></img>
                                <h1 className = "project-info__title">New York Real Estate Predictor</h1>

                                <div className = "project-info__description">
                                    <div>
                                        <img className = "project-info__image" src={"NY.jpg"} width = "100%"></img>
                                    </div>
                                    <div>
                                    <p>For this class project, I worked with Matt Hartmann, Tianshu Wang, and Dongeun Lee to predict New York City real estate prices. 
                                        We first cleaned and joined the data from two datasets, and then made inference models and prediction models. Our k-nearest 
                                        neighbor model had the best predictive performance, coming within 10% of the sales price for 94.4% of the test data. 
                                    </p>
                                    <p>Please see the report below.</p>
                                    <p>Skills used:
                                    <ul>
                                            <li className = "project-info__skill">R<img src = "/R-icon.png" alt="Javascript" className="skill-logo" width="30px"  /></li>
                                            <li className = "project-info__skill">Python <img src = "/python-icon.png" alt="React" className="skill-logo" width="30px"  /></li>        

                                  
                                        </ul>
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <div className = "project-info__links">
     
                                    <a href = "https://www.keepandshare.com/doc27/112800/nyc-real-estate-analysis-docx-pdf-4-1-meg?dn=y&dnad=y" target="_blank" rel="noopener noreferrer">View Report</a>
                                    </div>
                                    </div>
                            </div>
                            <div className = "project__description"></div>
                        </div>
                    </div>
                )
                case 'table tennis':  
                return (
                    <div onClick = {() => toggleProject()} className = "project-info__container" className = {showProject ? "project-info__container" : "hidden"} >
                        <div className = "project-info" className = {showProject ? "project-info" : "hidden"} >
                            <div className = "project-info__wrapper">
                                <img className = "X" src={"X.png"} width = "24px"></img>
                                <h1 className = "project-info__title">Table Tennis</h1>

                                <div className = "project-info__description">
                                    <div>
                                        <img className = "project-info__image" src={"table-tennis.jpg"} width = "100%"></img>
                                    </div>
                                    <div>
                                    <p>For this project, I used JavaScript, Django, and two sofascore APIs to get data for 4.5 million table tennis points in PostgreSQL.
                                        I then converted the data into a csv file and am analyzed the data. The problem that I am attempting to solve is based off of an observation
                                        that the live betting lines do not seem to account for the momentum of the players. For example, if two players are tied 7-7, but player 2 scored the prevoius
                                        4 points, I hypothesize that they will disproportionately win the set because they appear to score in clusters. I am currently researching models to find 
                                        some candidates appropriate for the problem.
                                    </p>
                                    <p></p>
                                    <p>
                                      
                                    <ul>
                                            <li className = "project-info__skill">Python (pandas, numpy, matplotlib, sklearn, etc.)<img src = "/python-icon.png" alt="React" className="skill-logo" width="30px"  /></li>        
                                            <li className = "project-info__skill">Javascript<img src = "/javascript-icon.png" alt="Javascript" className="skill-logo" width="30px"  /></li>
                                            <li className = "project-info__skill">PostgreSQL<img src = "/postgres-icon.png" alt="React" className="skill-logo" width="30px"  /></li>     
                                            <li className = "project-info__skill">Django (Django REST Framework)<img src = "/django-icon.png" alt="Javascript" className="skill-logo" width="30px"  /></li>      
                                        </ul>
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <div className = "project-info__links">
                                        <a href = "https://github.com/jakennedy98/tabletennis" target="_blank" rel="noopener noreferrer">View Code</a>
                                    </div>
                                    </div>
                            </div>
                            <div className = "project__description"></div>
                        </div>
                    </div>
                )

        }

    }

    const toggleProject = (project) => {
        setShowProject(!showProject);
        setProject(project);
    }
    
    return (
        <section id="projects" className="project-section" >

            {projectInfo(project)}

           

            <div className="project-grid">

                <div className = "project__label">Web Development</div>

                <div className = "project__container" onClick = {() => toggleProject('blog')}>
                    <div className="project" style={{backgroundImage: `url("blog.jpg")` }}>
                        <div className = "project__name"> Blog </div>
                  
                    </div>
                </div>

                <div className = "project__container" onClick = {() => toggleProject('homework')}>
                    <div className="project" style={{backgroundImage: `url("homework.jpg")` }}>
                        <div className = "project__name"> Homework Interface </div>
                  
                    </div>
                </div>

                <div className = "project__label">Data Analysis</div>

                <div className = "project__container" onClick = {() => toggleProject('table tennis')}>
                    <div className="project" style={{backgroundImage: `url("table-tennis.jpg")` }}>
                        <div className = "project__name"> Table Tennis</div>
                  
                    </div>
                </div>

                <div className = "project__container" onClick = {() => toggleProject('new york')}>
                    <div className="project" style={{backgroundImage: `url("NY.jpg")` }}>
                        <div className = "project__name">  NY Real Estate</div>
                  
                    </div>
                </div>

               
            </div>
        </section>
    )
}

export default Projects
