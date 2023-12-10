import { useOpacity } from './OpacityContext';

const AppRoutes = () => {
  const { opacity, fadeIn } = useOpacity();

  useEffect(() => {
    // Fade in when the component mounts
    fadeIn();
  }, [fadeIn]);

  return (
    <div style={{ opacity: opacity / 100, transition: 'opacity 0.5s ease' }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};


export default AppRoutes;