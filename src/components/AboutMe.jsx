import React from "react";
import { motion } from "framer-motion";
import FadeIn from 'react-fade-in';

function AboutMe() {
    return (
        <motion.div className="AboutMe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
        >
        <FadeIn delay="200">
        <div className="AboutMe-header ">
            <h1>About Me</h1>
        </div>
        <div className="AboutMe-content">
            <p>
            I am a recent graduate from the University of California, Irvine
            with a Bachelor of Science in Computer Science. I am currently
            seeking a full-time software engineering position.
            </p>
            <p>
            I am passionate about full-stack web development and mobile
            development. I am also interested in machine learning and data
            science.
            </p>
            <p>
            In my free time, I enjoy playing video games, watching anime, and
            reading manga.
            </p>
        </div>
        </FadeIn>
        </motion.div>
    );
}

export default AboutMe;