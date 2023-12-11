import React from 'react';
import FadeIn from 'react-fade-in';

function Skills() {
    return (
        <FadeIn delay="200">
        <div className="Skills">
        <div className="Skills-header">
            <h1>Skills</h1>
        </div>
        <div className="Skills-content">
            <p>
            Here are some of my skills:
            </p>
            <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>Linux</li>
            <li>Windows</li>
            <li>MacOS</li>
            </ul>
        </div>
        </div>
        </FadeIn>
    );
}

export default Skills;