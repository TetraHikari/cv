import { useState } from 'react'
import './App.css'
import { Navbar, Home } from './components';
import React from 'react'
import styles from './style';
import bgimg from './assets/bac.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <div className="App h-full">
    <Router>
      <div className='App w-full overflow-hidden h-full'>
        <div className={ `${styles.paddingX} ${styles.flexCenter}` }>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
        </div>
      <div className='Content h-full flex justify-center'>
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
    </div>
  )
}


export default App

