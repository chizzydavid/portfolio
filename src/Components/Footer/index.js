import React from "react";
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {

  return (
    <footer id="contact">
      <div className="footer__row">

          <div className=" contact-details">
            <h2>Contact Details</h2>

            <p className="address"> Chizindu David</p>
              <p>Lagos, Nigeria</p>
              <p>+234 813 501 5290</p>
              <p>davidchizindu@gmail.com</p>

          </div>

          <div className="footer_right">

            <div className="social__link">
                <p> <a href="https://www.linkedin.com/in/chizindu-david-7b99b2177/" target="_blank" rel='noopener noreferrer'> <LinkedInIcon className="link" /></a> </p>
                <p> <a href="https://github.com/chizzydavid/" target="_blank" rel='noopener noreferrer'> <GitHubIcon className="link" /></a> </p>
                <p> <a href="https://www.instagram.com/davidchizzy/" target="_blank" rel='noopener noreferrer'> <InstagramIcon className="link" /></a> </p>
                <p> <a href="https://twitter.com/lil_sensei/" target="_blank" rel='noopener noreferrer'> <TwitterIcon className="link" /></a> </p>
            </div>
            <p className="copyright">
              CHIZINDU DAVID 2021
            </p> 

          </div>
      </div>

    </footer>
  );
};

export default Footer;
