import React from 'react';
import FadeIn from 'react-fade-in';

function Projects() {
    return (
        <FadeIn delay="200">
        <div className="Projects">
        <div className="Projects-header">
            <h1>Projects</h1>
        </div>
        <div className="Projects-content">
            <p>
            Here are some of my projects:
            </p>
            <ul>
            <li>
                <a href="#">Project 1</a>
            </li>
            <li>
                <a href="#">Project 2</a>
            </li>
            </ul>
        </div>
        </div>
        </FadeIn>
    );
}

export default Projects;