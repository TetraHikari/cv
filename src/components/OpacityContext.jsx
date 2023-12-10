import React, { useState, createContext, useContext } from 'react';

const OpacityContext = createContext();

export const useOpacity = () => useContext(OpacityContext);

export const OpacityProvider = ({ children }) => {
  const [opacity, setOpacity] = useState(100);

  const fadeOut = () => setOpacity(0);
  const fadeIn = () => setOpacity(100);

  return (
    <OpacityContext.Provider value={{ opacity, fadeOut, fadeIn }}>
      {children}
    </OpacityContext.Provider>
  );
};

export default OpacityProvider;