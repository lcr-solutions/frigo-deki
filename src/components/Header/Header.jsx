
/**
 * @file Header component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React from 'react';

//Components
import Logo from '../Logo';
import Meni from '../Meni';

export default function Header() {
  return(
    <header>
      <Logo />
      <Meni />
    </header>
  );
}
