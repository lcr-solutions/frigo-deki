
/**
 * @file Logo component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React from 'react';

export default function Logo() {
  return(
    <a href= "/" className="logo">  
      <img 
        className="logo-image"
        src="images/logo.jpg" 
        alt=""></img>
    </a>
  );
}