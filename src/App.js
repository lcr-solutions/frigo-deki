/**
 * @file Main Application component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React from 'react';
import './App.scss';

//Components
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="app">
      <MainLayout />
    </div>
  );
}

export default App;
