import React from 'react'
import './Header.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import profileImage from '../../assets/images/profile_image.png';


function Header() {
    const sprayDots = (num) => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(<div key={i + 1} className="dot"> </div>)
        }
        return arr;
    }

  return (
    <div id="home" className="banner">
        <div className="banner__left">
            <div className="banner__text">

                <h2><span className="colored_text">Hello,</span> I'm Chizindu David</h2>
                <h1>FullStack Software Engineer</h1>
                <span className="border"></span>
                <h3>
                    I'm passionate about building things and I believe technology is a means through which creativity is expressed.
                    Let's create the future together.
                </h3>


                <div className="hero__buttons">
                    <div className="portfolio__btn hero__button smoothscroll" id="#portfolio">
                        <p>View Portfolio</p>
                    </div>
                    <div className="hero__button smoothscroll" id="#contact">
                        <p> Get In Touch </p>
                    </div>
                </div>
            </div>

            <div className="dot__wrapper left">
                {sprayDots(100)}
            </div>
        </div>

        <div className="banner__right">
            <div className="dot__wrapper">
                {sprayDots(120)}
            </div>
            <div className="banner__portrait">
                <img
                src={profileImage}
                alt="portrait"
                />         
            </div>

            <div className="social__links">
                <p> <a href="https://www.linkedin.com/in/chizindu-david-7b99b2177/" target="_blank" rel='noopener noreferrer'> <LinkedInIcon className="link" /></a> </p>
                <p> <a href="https://github.com/chizzydavid/" target="_blank" rel='noopener noreferrer'> <GitHubIcon className="link" /></a> </p>
                <p> <a href="https://www.instagram.com/davidchizzy/" target="_blank" rel='noopener noreferrer'> <InstagramIcon className="link" /></a> </p>
                <p> <a href="https://twitter.com/lil_sensei/" target="_blank" rel='noopener noreferrer'> <TwitterIcon className="link" /></a> </p>


                <p className="divider"></p>
                <p className="text">Follow me</p>

            </div>

        </div>
        
    </div>
  )
}

export default Header

