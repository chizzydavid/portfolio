import React from "react";
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import logo from '../../assets/images/logo-light.png';
import { Icon } from '@iconify/react';
import codePenIcon from '@iconify-icons/simple-icons/codepen';


const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__row">

        <img src={logo} alt="chizindu david logo" />
          <div className=" contact-details">
            <div className="social__link">
                <p> <a href="https://www.linkedin.com/in/chizindu-david-7b99b2177/" target="_blank" rel='noopener noreferrer'> <LinkedInIcon className="link" /></a> </p>
                <p> <a href="https://github.com/chizzydavid/" target="_blank" rel='noopener noreferrer'> <GitHubIcon className="link" /></a> </p>
                <p> <a href="https://www.instagram.com/davidchizzy/" target="_blank" rel='noopener noreferrer'> <InstagramIcon className="link" /></a> </p>
                <p> <a href="https://twitter.com/lil_sensei/" target="_blank" rel='noopener noreferrer'> <TwitterIcon className="link" /></a> </p>
                <p> <a href="https://codepen.io/chizzydavid/" target="_blank" rel='noopener noreferrer'> <Icon className="link" icon={codePenIcon} /> </a> </p>
            </div>
            {/* <p>davidchizindu@gmail.com</p> */}

          </div>
          <p className="copyright"> Designed and Built by Chizindu David </p> 
      </div>

    </footer>
  );
};

export default Footer;

