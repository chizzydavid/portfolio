import React from 'react'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import bannerImage from '../../assets/images/banner_two.jpg';
import bannerVideo from '../../assets/images/banner_video.mp4';


function Header() {
  return (
      <> 
        <video id="background-video" autoPlay loop muted poster={bannerImage}>
            <source src={bannerVideo} type="video/mp4" />
        </video>
        
        <div id="home" className="banner">
            <div className="banner__text">
                <h2><span className="colored_text">Hello,</span> I'm Chizindu David</h2>
                <h1>FullStack Software <br /> Engineer</h1>
    
                <span className="divider"></span>
                <h3>
                    I build exceptional, user-friendly products with technology. I'm passionate about computer science as a whole and the diverse ways its being applied in solving real world problems.
                </h3>
    
                <div className="hero__button" id="#portfolio">
                    <HashLink 
                        to="#portfolio"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})}
                    > 
                    <p>VIEW PORTFOLIO</p>
                    </HashLink>
                </div>
            </div>
        </div>    
      </>
  )
}

export default Header

