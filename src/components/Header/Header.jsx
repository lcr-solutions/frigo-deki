
/**
 * @file Header component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React, { useState } from 'react';

//Components
import Logo from '../Logo';
import Meni from '../Meni';

export default function Header() {
  const [open, setOpen] = useState(false);

  let menuClassName = "meni-mobile";

  if(open){
    menuClassName += " show";
  }
  function showMenu(){
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  return(
    <header>
      <Logo />
      <Meni 
        className = { menuClassName }
        closeMenu = { closeMenu }
      />
      <img className="burger-meni-icon" src="/images/hamburger-menu-icon.svg" 
        onClick = { showMenu }
        alt="">
      </img>  
    </header>
  );
}
