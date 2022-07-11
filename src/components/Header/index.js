import React from 'react'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
// import bannerImage from '../../assets/images/video_poster.png';
// import bannerVideo from '../../assets/images/banner_video.mp4';
function Header() {
  return (
      <> 
        {/* <video id="background-video" autoPlay loop muted poster={bannerImage}>
            <source src={bannerVideo} type="video/mp4" />
        </video> */}

        <div id="background-video">
        </div>
        
        <div id="home" className="banner">
            <div className="banner__text">
                <h2><span className="colored_text">Hello,</span> I'm Chizindu David</h2>
                <h1>Backend Software <br /> Engineer</h1>
    
                <span className="divider"></span>
                <h3>
                    I make use of technology to build highly scalabe and robust systems. I'm passionate about the diverse ways technology is being applied in solving real world problems.
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

