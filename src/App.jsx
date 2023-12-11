import { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Home , AboutMe, Projects, Contact, Education, Skills, AnimatedRoutes} from './components';
import React from 'react'
import styles from './style';
import bgimg from './assets/bac.jpg';
import { BrowserRouter as Router} from 'react-router-dom';



export const App = () => {


  return (
    <div className={`App h-full`}>
    <Router>
      <div className='App w-full overflow-hidden h-full'>
        <div className={ `${styles.paddingX} ${styles.flexCenter}` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
        </div>
      <div className='Content h-full flex justify-center mx-10 xxxs:max-ss:mx-20'>
        <AnimatedRoutes />
      </div>
      </div>
    </Router>
    </div>
  );
}


export default App

