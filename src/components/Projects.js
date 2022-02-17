import React from 'react'

function Projects() {
    return (
        <section id="projects" className="project-section" >
            <div className="project-grid">
                <div className="project">
                    <img src="strawberry.png" height="100%"></img>
                </div>
                <a className="project" href="https://lsat-blog-client.herokuapp.com">
                    <img src="blog.png" height="100%" width="100%"></img>
                </a>
            </div>
        </section>
    )
}

export default Projects
