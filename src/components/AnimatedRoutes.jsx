import React from 'react'
import { Navbar, Home , AboutMe, Projects, Contact, Education, Skills} from './index.js';
import { Route, Routes, useLocation } from 'react-router-dom';

import { motion, AnimatePresence, animate } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
      <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    );
}

export default AnimatedRoutes