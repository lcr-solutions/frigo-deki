/**
 * @file Meni component
 * @author Nemanja Rotman <nemanjarotman@lcr-solutions.com>
 * @version 1.0
 * @copyright LCR Solutions 2019
 */

import React  from 'react'
import PropTypes from 'prop-types';

export default function Meni(props) {

  const { className, closeMenu } = props;

  return(
    <div>
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

      <div className = { className }>
        <img className="close-menu" src="/images/close-menu.svg"
         onClick={ closeMenu } alt=""></img>
        <div className="meni-links-wrapper">
          <li>
            <a href="#home">HOME</a>
            <div className="divider-line"></div>
          </li>
          <li>
            <a href="#proizvodi">PROIZVODI</a>
            <div className="divider-line"></div>
          </li>
          <li>
            <a href="#odrzavanje">ODRŽAVANJE</a>
            <div className="divider-line"></div>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
            <div className="divider-line"></div>
          </li>
          <li>
            <a href="#about">O NAMA</a>
            <div className="divider-line"></div>
          </li>
        </div>
      </div>
    </div>
  );
}

Meni.propTypes = {
  className: PropTypes.string,
  closeMenu: PropTypes.func.isRequired,
};