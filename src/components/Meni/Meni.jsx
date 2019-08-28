/**
 * @file Meni component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React from 'react'

export default function Meni() {
  return(
    <ul className="meni">
      <li>
        <a href="#home">HOME</a>
      </li>
      <li>
        <a href="#proizvodi">PROIZVODI</a>
      </li>
      <li>
        <a href="#odrzavanje">ODRŽAVANJE</a>
      </li>
      <li>
        <a href="#portfolio">PORTFOLIO</a>
      </li>
      <li>
        <a href="#about">O NAMA</a>
      </li>
    </ul>

  );
}

