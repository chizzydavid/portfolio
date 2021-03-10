import React from "react";
import './About.css';
import profileImg from '../../assets/images/profile_picture.jpg';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CreateIcon from '@material-ui/icons/Create';
import StorageIcon from '@material-ui/icons/Storage';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {
  return (
    <section id="about" className="about">

      <div id="section" >
        <div className="about__row">
          <div className="about__img">
            <div className="profile-pic" style={{
                backgroundImage: `url(${profileImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}></div>        
          </div>

          <div className="about__details">
            <h2>About Me</h2>
            <p className="about__text">Hello there, I'm Chizzy I have been coding for the last 4 years, As a Full Stack developer I've worked both with startups and large corporations to help build & scale various products. I've worked with a bunch of technologies, but lately I enjoy doing more of front end web and mobile work. I also enjoy a bit of writing. </p>

            <div className="about__items">
              <div className="about__item">
                  <div className="about__item__icon">
                    <DesktopWindowsIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Front End Development</h4>
                      <p>Using technologies like react js and vue js</p>
                  </div>
              </div>  
              
              <div className="about__item">
                  <div className="about__item__icon">
                    <PhoneIphoneIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Mobile App Development</h4>
                      <p>Cross mobile app development with Flutter</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <StorageIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Back End Development</h4>
                      <p>Building robust and scalabe API's with several SQL and NoSQL databases</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <CreateIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Wireframing and Prototyping</h4>
                      <p>Crafting user flows and diagrams for several application use cases</p>
                  </div>
              </div>  

              <div className="about__item">
                  <div className="about__item__icon">
                    <ColorLensIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>UI/UX Design</h4>
                      <p>Coming up with the best user experience for applications</p>
                  </div>
              </div>  



              <div className="about__item">
                  <div className="about__item__icon">
                    <GitHubIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Version Control</h4>
                      <p>Pushing code to various repositories and practicing git workflows.</p>
                  </div>
              </div>  


              {/* <div className="about__item">
                  <div className="about__item__icon">
                    <AssignmentOutlinedIcon className="icon" />
                  </div>
                  <div className="about__item_text">
                      <h4>Technical Writing</h4>
                      <p>Writing reviews about technologies and tutorials</p>
                  </div>
              </div>   */}
            </div>
          </div>

        </div>

      </div>


    </section>
  );
};

export default About;
