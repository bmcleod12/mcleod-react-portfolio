import React from "react";
import projects from "../projects.json";

function Projects() {
    return (
        <div className="container p-3 mb-5 bg-success">
            <div className="row">
                <div className="col-md-12 text-light">
                    <h2>Below are a few projects with their deployed links and repos.</h2>
                </div>
            </div>
            <div className="row justify-content-around mb-5">

                {projects.map(project => {
                    return (
                        <div className="card bg-light col-md-8 gy-5">
                            <h3 className="pt-3">{project.name}</h3>
                            <p>
                                The <a href={project.deployed} >{project.name}</a> {project.description}
                            </p>
                            <img src={project.image} className="img-fluid rounded px-3 mb-3"
                                alt={project.alt} />
                            <p>
                                See the code behind the magic in the <a href={project.repo}>{project.name} Repo</a>.</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;
