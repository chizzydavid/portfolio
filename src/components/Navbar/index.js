import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'
import { Icon } from '@iconify/react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import codePenIcon from '@iconify-icons/simple-icons/codepen';
import logo from '../../assets/images/logo-light.png';

function Navbar() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [burgerNavOpen, setBurgerNavOpen] = useState(false);
  const [navbarOpaque, setNavbarOpaque] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeNavLink, setActiveNavLink] = useState('home');

  const handleWindowScroll = () => {
    if (!burgerNavOpen) {
      var scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop && scrollTop > 100) setHideNavbar(true);
      else setHideNavbar(false);
      if (scrollTop > (window.innerHeight - 50)) setNavbarOpaque(true);
      else setNavbarOpaque(false);
      setLastScrollTop(scrollTop);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  });

  const toggleOpen = () => setBurgerNavOpen(!burgerNavOpen)

  const handleNavClick = (navLink) => {
    toggleOpen();
    setActiveNavLink(navLink);
  }

  const navbarClassname = () => {
    let classname = '';
    classname = hideNavbar ? `hide ${classname}` : classname;
    classname = burgerNavOpen ? `open ${classname}` : classname;
    classname = navbarOpaque ? `opaque ${classname}` : classname;
    return classname;
  }

  return (
    <div className={`header ${navbarClassname()}`}>
      <div className="header_nav">
        <div className="header_logo">
          <img src={logo} alt="chizindu david logo" />
        </div>

        <div className="burger_wrapper">
          <div onClick={toggleOpen} className={`burger_nav ${burgerNavOpen ? 'open' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>


        <div className={`header_nav_items ${navbarClassname()}`}>
          <ul id="nav" className="nav">
            
            <li className={activeNavLink === 'home' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('home')} to="#home"> <h1> Home </h1> </HashLink>
            </li>

            <li className={activeNavLink === 'about' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('about')} to="#about"> <h1> About </h1> </HashLink>
            </li>

            <li className={activeNavLink === 'skills' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('skills')} to="#skills"> <h1>Skills </h1> </HashLink>
            </li>
            
            <li className={activeNavLink === 'portfolio' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('portfolio')} to="#portfolio"> <h1>Portfolio </h1> </HashLink>
            </li>

            <li className={activeNavLink === 'resume' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('resume')} to="#resume"> <h1> Resume </h1> </HashLink>
            </li>

            <li className={activeNavLink === 'contact' ? 'current' : ''}>
              <HashLink onClick={() => handleNavClick('contact')} to="#contact"> <h1>Contact Me </h1> </HashLink>
            </li>

            <li id="social__links">
              <a href="https://www.linkedin.com/in/chizindu-david-7b99b2177/" target="_blank" rel='noopener noreferrer'> <LinkedInIcon className="link" /></a>
              <a href="https://github.com/chizzydavid/" target="_blank" rel='noopener noreferrer'> <GitHubIcon className="link" /></a>
              <a href="https://www.instagram.com/davidchizzy/" target="_blank" rel='noopener noreferrer'> <InstagramIcon className="link" /></a>
              <a href="https://twitter.com/lil_sensei/" target="_blank" rel='noopener noreferrer'> <TwitterIcon className="link" /></a>
              <a href="https://codepen.io/chizzydavid/" target="_blank" rel='noopener noreferrer'> <Icon className="link" icon={codePenIcon} /> </a>
            </li>
          </ul>
        </div> 
    </div>
  )
}

export default Navbar

