import React from 'react';
import FadeIn from 'react-fade-in';

function Contact() {
    return (
        <FadeIn delay="200">
        <div className="Contact">
        <div className="Contact-header">
            <h1>Contact</h1>
        </div>
        <div className="Contact-content">
            <p>
            You can contact me at:
            </p>
            <ul>
            <li>
                <a href="mailto:
                ">Email</a>
            </li>
            </ul>
        </div>
        </div>
        </FadeIn>
    );
}

export default Contact;