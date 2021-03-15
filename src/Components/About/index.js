import React, { useEffect, useState } from "react";
import './About.css';
import profileImage from '../../assets/images/profile_picture.jpg';
import bannerImage from '../../assets/images/profile_image.jpg';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CreateIcon from '@material-ui/icons/Create';
import StorageIcon from '@material-ui/icons/Storage';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {

  const [smallScreen, setSmallScreen] = useState(false);


  const checkSmallScreen = () => {
    if (window.innerWidth <= 700) setSmallScreen(true);
    else setSmallScreen(false);
}

  useEffect(() => {
    if (window.innerWidth <= 700) setSmallScreen(true);
    else setSmallScreen(false);    
    window.addEventListener('resize', checkSmallScreen);
    return () => window.removeEventListener('resize', checkSmallScreen);
  }, []);
  
  const bgImage = smallScreen ? bannerImage : profileImage;

  return (
    <section id="about" className="about">

      <div id="section" >
        <div className="about__row">
          <div className="about__img">
            <div className="profile-pic" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}></div>        
          </div>

          <div className="about__details">
            <h2>About Me</h2>
            <p className="about__text">Hello there, I'm Chizzy I have been coding for the last 4 years. I love to build things with technology. As a Full Stack developer I've worked with both startups and big corporations to help build & scale various products. I've used a bunch of technologies, but lately I enjoy doing Front-End Web and Mobile.</p>

            <div className="about__items">
              <div className="about__item">
                  <div className="about__item__icon">
                    <DesktopWindowsIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Front End Development</h4>
                      <p>Mainly using technologies like ReactJs and VueJs</p>
                  </div>
              </div>  
              
              <div className="about__item">
                  <div className="about__item__icon">
                    <PhoneIphoneIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Mobile App Development</h4>
                      <p>Cross mobile app development with Flutter(Dart)</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <StorageIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Back End Development</h4>
                      <p>Building robust and scalabe API's with both SQL and NoSQL databases</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <CreateIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Wireframing and Prototyping</h4>
                      <p>Crafting user flows and diagrams for application use cases</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <ColorLensIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>UI/UX Design</h4>
                      <p>Collaborating to create aesthetic and intuitive user experiences</p>
                  </div>
              </div>  



              <div className="about__item">
                  <div className="about__item__icon">
                    <GitHubIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Version Control</h4>
                      <p>Implementing git workflows to collaborate with others on a code repository.</p>
                  </div>
              </div>  
            </div>
          </div>

        </div>

      </div>


    </section>
  );
};

export default About;
