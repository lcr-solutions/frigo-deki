/**
 * @file MainLayout component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React from 'react';

//Components
import Header from '../Header';

export default function MainLayout() {
  return(
    <div className='main'> 
      <Header />
      <div className="section" id="home"></div>
      <div className="section" id="proizvodi"></div>
      <div className="section" id="odrzavanje"></div>
      <div className="section" id="portfolio"></div>
      <div className="section" id="about"></div>
    </div>
  )
} 