import React, { useState, useEffect } from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton } from '@material-ui/core'
import lightLogo from '../../assets/images/logo-light.png';
import blueLogo from '../../assets/images/logo-dark.png';


function Navbar() {
  const [navbarDark, handleNavbarDark] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const checkMobileMode = () => {
      if (window.innerWidth <= 760) setMobileMode(true);
      else setMobileMode(false);
  }

  const transitionNavBar = () => {
    if (window.scrollY > 660) handleNavbarDark(true);
    else handleNavbarDark(false);
  }

  useEffect(() => {
      if (window.innerWidth <= 760) setMobileMode(true);
      else setMobileMode(false);    
      window.addEventListener('resize', checkMobileMode);
      return () => window.removeEventListener('resize', checkMobileMode);
  }, []);

  useEffect(() => {
      window.addEventListener('scroll', transitionNavBar);
      //return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const logo = window.innerWidth <= 760 ? blueLogo : lightLogo;

  const toggleOpen = () => setMobileNavOpen(!mobileNavOpen)

  const handleNavClick = function() {
    if (window.innerWidth <= 760) toggleOpen();
  }


  const navbarClassname = () => {
    let classname = '';
    classname = mobileMode ? `responsive ${classname}` : classname;
    classname = mobileNavOpen ? `open ${classname}` : classname;
    return classname;
  }

  return (
    <div className={`header ${navbarDark && !mobileMode ? 'dark' : ''}`}>
      <div className="header__lg">

        <div className="header__left">
          <img
            src={logo}
            alt="gmail logo"
          />
        </div>

        <div className={`header__middle ${navbarClassname()}`}>
          <ul id="nav" className="nav">
            <li className="current">
              <a onClick={handleNavClick} className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleNavClick} className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleNavClick} className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a onClick={handleNavClick} className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li id="contact-mobile">
              <a onClick={handleNavClick} className="smoothscroll" href="#contact">
                Contact Me
              </a>
            </li>

          </ul>
        </div>

      </div>



      <div className="header__right">

        <li className="contact_me">
              <a className="smoothscroll" href="#contact">
                Contact Me
              </a>
            </li>
      </div>
        
      <div className="mobileNav">

        {mobileNavOpen 
          
          ? (<IconButton onClick={toggleOpen} className="mobileIcon">
              <CloseIcon />
            </IconButton> )
          : (<IconButton onClick={toggleOpen} className="mobileIcon">
            <MenuIcon />
          </IconButton> )
        }        
      </div>
    </div>
  )
}

export default Navbar

