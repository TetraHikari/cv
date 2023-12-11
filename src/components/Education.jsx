import React from "react";
import { motion } from "framer-motion";
import FadeIn from 'react-fade-in';

function Education() {
    return (
        <motion.div className="Education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}>
        <FadeIn delay="200">
        <div className="Education-header">
            <h1>Education</h1>
        </div>
        <div className="Education-content">
            <p>
            I am currently pursuing a Bachelor of Science in Computer Science
            with a minor in Mathematics at the University of Maryland, College
            Park. I am expected to graduate in May 2023.
            </p>
            <p>
            I graduated from Montgomery Blair High School in Silver Spring,
            Maryland in May 2019. I was a member of the Science, Mathematics,
            and Computer Science Magnet Program.
            </p>
        </div>
        </FadeIn>
        </motion.div>
    );
}

export default Education;