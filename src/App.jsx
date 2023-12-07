import { useState } from 'react'
import './App.css'
import { Navbar, Home } from './components';
import React from 'react'
import styles from './style';
import bgimg from './assets/bac.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <Router>
      <div className='App w-full overflow-hidden h-full' style={{backgroundImage: `url(${bgimg})`}}>
        <div className={ `${styles.paddingX} ${styles.flexCenter}` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
        </div>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
{/* 
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Home
          </div>

        </div> */}
      </div>
    </Router>
  )
}


export default App

