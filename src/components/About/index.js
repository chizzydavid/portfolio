import React from "react";
import './About.css';

const About = () => {

  return (
    <section id="about" >
      <div id="section" >
        <h2>About Me</h2>
        <div className="about__row">
          <div className="about__details">
            <p className="about__text">My name is David and I'm located in Lagos Nigeria, I started with editing wordpress themes and php websites, taught me the basics
html, css and programming in general
I have a knack for building applications/products which are intuitive and provide a dynamic user experience.

I've been priviledged to work with a budding startup, a large coporate bank. my main focus has been building front - end and mobile 
spectrum ambitious/solutions with positive people. Fan of OUTDOOR activities and TV series</p>
            <p className="about__text"></p>
            <p className="about__text">As a Full Stack developer I've worked with both startups and big corporations to help build & scale various products. I've used a bunch of technologies, but lately I enjoy doing Front-End Web and Mobile. I have experience working with Javascript, Python and Dart(Flutter) </p>
          </div>

          <div className="about__img">
            <div className="profile-pic" >
              <div className="pic_content"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
