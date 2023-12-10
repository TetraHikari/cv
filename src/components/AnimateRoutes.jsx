import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Home, AboutMe, Projects, Contact, Education, Skills } from './index.js';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key}    classNames={{
    enter: '-translate-x-full',
    enterActive: 'translate-x-0 transition-transform duration-300',
    exit: 'translate-x-0',
    exitActive: '-translate-x-full transition-transform duration-300',
  }} timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoutes;
